import connectMongoDB from "../../../../lib/mongodb";
import User from "../../../../models/user";
import { NextResponse } from "next/server";

export async function GET(req, { params }) {
  try {
    await connectMongoDB();

    const { id } = params;
    const user = await User.findById(id);

    if (!user) {
      return NextResponse.json({ message: "User not found" }, { status: 404 });
    }

    console.log("user found");
    return NextResponse.json({ user });
  } catch (err) {
    console.error(err);
    return NextResponse.json(
      { message: "Error retrieving user" },
      { status: 500 }
    );
  }
}

// borrando usuario por id en el url
export async function DELETE(req, { params }) {
  try {
    await connectMongoDB();

    const { id } = params;
    const user = await User.findByIdAndDelete(id);

    if (!user) {
      return NextResponse.json({ message: "User not found" }, { status: 404 });
    }

    console.log("user deleted");
    return NextResponse.json({ message: "User deleted" });
  } catch (err) {
    console.error(err);
    return NextResponse.json(
      { message: "Error deleting user" },
      { status: 500 }
    );
  }
}

// actualizando usuario por id en el url
export async function PUT(req, { params }) {
  try {
    await connectMongoDB();

    const { id } = params;
    const {
      newName: name,
      newEmail: email,
      newPassword: password,
    } = await req.json();

    const user = await User.findByIdAndUpdate(
      id,
      { name, email, password },
      { new: true }
    );

    if (!user) {
      return NextResponse.json({ message: "User not found" }, { status: 404 });
    }

    console.log("user updated");
    return NextResponse.json({ user });
  } catch (err) {
    console.error(err);
    return NextResponse.json(
      { message: "Error updating user" },
      { status: 500 }
    );
  }
}
