import type { Handler } from "@netlify/functions";
import fetch from "node-fetch";

const handler: Handler = async (_event, _context) => {
  const API_URL = "http://harao.infy.uk/api/read.php";

  try {
    const response = await fetch(API_URL);
    const data = await response.json();

    return {
      statusCode: 200,
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*", // Em produção, restrinja isso!
      },
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({
        error: "Erro ao acessar a API",
        details: (error as Error).message,
      }),
    };
  }
};

export { handler };
