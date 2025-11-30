import { Metadata } from "next";

interface MetadataData {
  title: string;
  description: string;
}

export function createMetadata(data: MetadataData): Metadata {
  return {
    title: data.title,
    description: data.description,
  };
}
