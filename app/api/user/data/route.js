import { NextResponse } from "next/server";
import connectbd from "../../../../../config/bd";
import User from "../../../../../models/User";
import { getAuth } from "@clerk/nextjs/server";

export async function Get(request) {
  try {
    const { userId } = getAuth(request);
    await connectbd();
    const user = await User.findById(userId);

    if (!user) {
      return NextResponse.json({
        success: false,
        message: "User not found",
      });
    }

    return NextResponse.json({ success: true, user });
  } catch (error) {
    return NextResponse.json({ sucess: false, message: error.message });
  }
}
