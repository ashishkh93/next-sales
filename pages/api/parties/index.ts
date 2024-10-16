// pages/api/users/index.ts
import type { NextApiRequest, NextApiResponse } from "next";
import { getDataSource } from "../../../ormconfig";

declare global {
  interface Party {
    id: string;
    name: string;
    code: string;
  }
}

type Search = {
  search?: string;
};

const default_parties: Party[] = [
  { id: "1", name: "John Doe", code: "P-JOHN" },
  { id: "2", name: "Jane Smith", code: "P-JANE" },
  { id: "3", name: "Robert Brown", code: "P-ROBER" },
  { id: "4", name: "Emily Davis", code: "P-EMILY" },
  { id: "5", name: "Michael Wilson", code: "P-MICHA" },
  { id: "6", name: "Sarah Johnson", code: "P-SARAH" },
  { id: "7", name: "David Lee", code: "P-DAVID" },
  { id: "8", name: "Sophia Martinez", code: "P-SOPHI" },
  { id: "9", name: "James White", code: "P-JAMES" },
  { id: "10", name: "Olivia Harris", code: "P-OLIVI" },
];

const handler = async (
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> => {
  try {
    await getDataSource();
    const { search }: Search = req.query;
    if (!search) {
      return res.status(200).json(default_parties);
    }

    const relatedParteis = default_parties.filter((party: Party) =>
      party.name
        ?.toLocaleLowerCase()
        .includes(search?.toLocaleLowerCase() as string)
    );
    return res.status(200).json({
      status: true,
      message: "Parties fetched successfully",
      entity: relatedParteis,
    });
  } catch (error) {
    console.error("Error in API route:", error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};

export default handler;
