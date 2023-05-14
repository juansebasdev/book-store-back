import { Request, Response } from "express";
import AWS from "aws-sdk";
import { config } from "../config";

AWS.config.update({
  region: config.AWS_DEFAULT_REGION,
  accessKeyId: config.AWS_ACCESS_KEY_ID,
  secretAccessKey: config.AWS_SECRET_ACCESS_KEY,
  sessionToken: config.AWS_SESSION_TOKEN,
});
const TABLE_NAME = "books";
const dynamoClient = new AWS.DynamoDB.DocumentClient();

const getBooks = async (req: Request, res: Response) => {
  const params = { TableName: TABLE_NAME };

  try {
    const response = await dynamoClient.scan(params).promise();
    const books = response.Items ? response.Items : [];
    return res.status(200).json(books);
  } catch (error) {
    return res.status(400).json({ error });
  }
};

const getBookById = async (req: Request, res: Response) => {
  const { id } = req.params;
  const params = {
    TableName: TABLE_NAME,
    FilterExpression: "id = :id",
    ExpressionAttributeValues: { ":id": id },
  };

  try {
    const response = await dynamoClient.scan(params).promise();
    if (response.Items && response.Items.length > 0) {
      const book = response.Items;
      return res.status(200).json(book);
    } else {
      return res.status(404).json({ message: "Not Found" }); 
    }
  } catch (error) {
    return res.status(400).json({ error });
  }
};

export { getBooks, getBookById };
