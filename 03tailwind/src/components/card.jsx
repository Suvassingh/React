import React from 'react'

const card = ({username ="ss",post="not assigned yet"}) => {
    // console.log(props)
  return (
    <div>
      {/* <img src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRFUs_3BaqPDUCvtipXJwbEZ4dMQogTl6A184_4Kw_Wp3PlH8NWTAbK7t1H3vlz_2AdviYZKz9QNTShZN6XgEgx8E0Py5wbuXg-9RLKRxY" alt="" />
      <h1 className="text-2xl, bg-green-300 p-3 rounded-2xl">
        {" "}
        A card for photo
      </h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit, eaque
        accusantium. Aspernatur in aliquid saepe porro similique laborum quia
        quibusdam.
      </p> */}
      <div className="flex flex-col items-center gap-6 p-7 md:flex-row rounded-2xl">
        <div>
          <img
            className="size-48 shadow-xl rounded-md"
            alt=""
            src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRFUs_3BaqPDUCvtipXJwbEZ4dMQogTl6A184_4Kw_Wp3PlH8NWTAbK7t1H3vlz_2AdviYZKz9QNTShZN6XgEgx8E0Py5wbuXg-9RLKRxY"
          />
        </div>
        <div className="flex items-center md:i">
          <span className="text-2xl font-medium">{username}</span>
          <span className="font-medium text-sky-500">{post}</span>
          <span className="flex gap-2 font-medium text-gray-600 dark:text-gray-400">
            <span>No. 4</span>
            <span>·</span>
            <span>2025</span>
          </span>
        </div>
      </div>
    </div>
  );
}

export default card
