import { cookies } from "next/headers";
import { redirect, RedirectType } from "next/navigation";

export async function POST() {
	cookies().set("name_route_handler", Date.now().toString());
	return redirect("/", RedirectType.push);
}
