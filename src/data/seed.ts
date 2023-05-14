import AWS from "aws-sdk";
import { config } from "../config";
import seedBooks from "./books";
import { v4 as uuidv4 } from "uuid";

AWS.config.update({
  region: config.AWS_DEFAULT_REGION,
  accessKeyId: config.AWS_ACCESS_KEY_ID,
  secretAccessKey: config.AWS_SECRET_ACCESS_KEY,
  sessionToken: config.AWS_SESSION_TOKEN,
});
const TABLE_NAME = "books";
const dynamoDb = new AWS.DynamoDB();
const dynamoClient = new AWS.DynamoDB.DocumentClient();

const writeData = async () => {
  try {
    const params = { TableName: TABLE_NAME };
    const response = await dynamoClient.scan(params).promise();
    const books = response.Items ? response.Items : [];

    books.forEach(async (book) => {
      const params = { TableName: TABLE_NAME, Key: { id: { S: book.id } } };
      try {
        await dynamoDb.deleteItem(params).promise();
      } catch (error) {
        console.error(`${error}`);
      }
    });
    console.info("Data deleted!");

    seedBooks.forEach(async (seedBook) => {
      const params = {
        TableName: TABLE_NAME,
        Item: {
          id: { S: uuidv4() },
          name: { S: seedBook.name },
          image: { S: seedBook.image ? seedBook.image : "" },
          author: { S: seedBook.author },
          description: { S: seedBook.description },
          countInStock: { N: seedBook.countInStock.toString() },
          price: { N: seedBook.price.toString() },
        },
      };
      try {
        await dynamoDb.putItem(params).promise();
      } catch (error) {
        console.error(`${error}`);
      }
    });
    console.log("Data imported!");
  } catch (error) {
    console.error(`${error}`);
  }
};

writeData();
