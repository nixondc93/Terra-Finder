import dayjs from "dayjs";

export const parseDenom = (str: string) => str.substr(1);

export const parseDenomInt = (amount: number) => amount / 1000000;

export const parseDateTime = (date: string) => dayjs(date).format("YYYY.MM.DD HH:mm:ssZ")