import connectMongoDB from "../../../lib/mongodb";
import user from "../../../models/user";
import { NextResponse } from "next/server";

export async function GET(req) {
  try {
    await connectMongoDB();
    const users = await user.find();
    return NextResponse.json({ users });
  } catch (err) {
    console.error(err);
    return NextResponse.json(
      { message: "Error retrieving users" },
      { status: 500 }
    );
  }
}

export async function POST(req) {
  try {
    await connectMongoDB(); // conectando a la base de datos
    const newUser = new user(req.body); // creando un nuevo usuario
    await newUser.save(); // guardando el usuario
    return NextResponse.json({ message: "User created" }, { status: 201 });
  } catch (err) {
    console.error(err);
    return NextResponse.json(
      { message: "Error creating user" },
      { status: 500 }
    );
  }
}

export async function DELETE(req) {
  await connectMongoDB();
  await user.findByIdAndDelete(req.body.id);
}
