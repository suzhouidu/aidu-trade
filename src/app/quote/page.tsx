import { redirect } from "next/navigation";

/** /quote 与 /contact 是同一个留资入口，直接跳转。 */
export default function QuotePage() {
  redirect("/contact");
}
