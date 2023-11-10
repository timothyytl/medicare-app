import { faqs } from "./../../assets/data/faqs"
import FaqItem from "./FaqItem"

export default function FaqList() {
  return (
    <ul className="mt-[38px]">
      {faqs.map((item, index) => (
        <FaqItem item={item} key={index} />
      ))}
    </ul>
  )
}
