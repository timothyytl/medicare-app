import formatDate from "../../utils/formatDate"

export default function DoctorAbout() {
  return (
    <div>
      <div>
        <h3 className="text-[20px] leading-[30px] text-headingColor font-semibold flex items-center gap-2">
          About
          <span className="text-irisBlueColor font-bold text-[24px] leading-9">
            Timothy Lim
          </span>
        </h3>
        <p className="text_para">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sunt nam
          placeat accusamus obcaecati architecto illum fugiat exercitationem
          quos optio, esse voluptatibus itaque? Quisquam voluptatem dolore,
          cumque provident beatae magnam et?
        </p>
      </div>

      <div className="mt-12">
        <h3 className="text-[20px] leading-[30px] text-headingColor font-semibold">
          Education
        </h3>

        <ul className="pt-4 md:p-5">
          <li className="flex flex-col sm:flex-row sm:justify-between sm:items-end md:gap-5 mb-[30px]">
            <div>
              <span className="text-irisBlueColor text-[15px] leading-6 font-semibold">
                {formatDate("1-6-2022")} - {formatDate("11-6-2023")}
              </span>
              <p className="text-[16px] leading-6 font-medium text-textColor">
                PHD in Surgery
              </p>
            </div>
            <p className="text-[14px] leading-5 font-medium text-textColor">
              Queen Elizabeth Hospital, Hong Kong
            </p>
          </li>
          <li className="flex flex-col sm:flex-row sm:justify-between sm:items-end md:gap-5 mb-[30px]">
            <div>
              <span className="text-irisBlueColor text-[15px] leading-6 font-semibold">
                {formatDate("12-25-2020")} - {formatDate("1-5-2022")}
              </span>
              <p className="text-[16px] leading-6 font-medium text-textColor">
                PHD in Surgery
              </p>
            </div>
            <p className="text-[14px] leading-5 font-medium text-textColor">
              Queen Elizabeth Hospital, Hong Kong
            </p>
          </li>
        </ul>
      </div>

      <div className="mt-12">
        <h3 className="text-[20px] leading-[30px] text-headingColor font-semibold">
          Experience
        </h3>

        <ul className="grid sm:grid-cols-2 gap-[30px] pt-4 md:p-5">
          <li className="p-4 rounded bg-[#fff9ea]">
            <span className="text-yellowColor text-[15px] leading-6 font-semibold">
              {formatDate("1-6-2022")} - {formatDate("11-6-2023")}
            </span>
            <p className="text-[16px] leading-6 font-medium text-textColor">
              Sr. Surgeon
            </p>

            <p className="text-[14px] leading-5 font-medium text-textColor">
              Queen Elizabeth Hospital, Hong Kong
            </p>
          </li>
          <li className="p-4 rounded bg-[#fff9ea]">
            <span className="text-yellowColor text-[15px] leading-6 font-semibold">
              {formatDate("1-6-2022")} - {formatDate("11-6-2023")}
            </span>
            <p className="text-[16px] leading-6 font-medium text-textColor">
              Sr. Surgeon
            </p>

            <p className="text-[14px] leading-5 font-medium text-textColor">
              Queen Elizabeth Hospital, Hong Kong
            </p>
          </li>
        </ul>
      </div>
    </div>
  )
}
