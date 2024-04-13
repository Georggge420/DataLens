import connectMongoDB from "../../../lib/mongodb";
import user from "../../../models/user";
import { NextResponse } from "next/server";

// obtener todos los usuarios
export async function GET(req) {
  //funcionando
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

// crear nuevo usuario
export async function POST(req) {
  //funcionando
  try {
    const { name, email, password } = await req.json();
    await connectMongoDB();
    const newUser = new user({ name, email, password });
    await newUser.save();
    return NextResponse.json({ message: "User created" }, { status: 201 });
  } catch (err) {
    console.error(err);
    return NextResponse.json(
      { message: "Error creating user", error: err },
      { status: 500 }
    );
  }
}

// eliminar usaurio
export async function DELETE(req) {
  //funcionando
  try {
    const id = req.nextUrl.searchParams.get("id");
    await connectMongoDB();
    await user.findByIdAndDelete(id);
    return NextResponse.json({ message: "User deleted" });
  } catch (err) {
    console.error(err);
    return NextResponse.json(
      { message: "Error deleting user" },
      { status: 500 }
    );
  }
}
