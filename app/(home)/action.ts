"use server";
import { z } from "zod";
import validator from "validator";
import { redirect } from "next/navigation";

interface ActcionToken {
  token: boolean;
}

const phoneSchema = z
  .string()
  .refine((phone) => validator.isMobilePhone(phone), "폰 번호를 입력해주세요");

const tokenSchema = z.coerce.number().min(111111).max(999999);

export default async function smsLogin(
  prevData: ActcionToken,
  formData: FormData
) {
  const phone = formData.get("phone");
  const token = formData.get("token");

  if (!prevData.token) {
    const result = phoneSchema.safeParse(phone);
    if (!result.success) {
      return {
        token: false,
        error: result.error.flatten(),
      };
    } else {
      return {
        token: true,
      };
    }
  } else {
    const result = tokenSchema.safeParse(token);
    if (!result.success) {
      return {
        token: true,
      };
    } else {
      redirect("/");
    }
  }
}
