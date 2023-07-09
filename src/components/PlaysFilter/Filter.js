import React from "react";

import { BiChevronUp, BiChevronDown } from "react-icons/bi";
import { Disclosure } from "@headlessui/react";

const Filter = (props) => {
  return (
    <Disclosure>
      {({ open }) => (
        <div className="my-2">
          <Disclosure.Button className="py-2 flex items-center gap-2">
            {open ? <BiChevronUp /> : <BiChevronDown />}
            <span className={open ? "text-red-600 " : "text-gray-700"}>
             {props.title}
            </span>
          </Disclosure.Button>
          <Disclosure.Panel className="text-gray-500">
            <div className="flex flex-wrap items center gap-3">
              {props.tags.map((tag) => (
                <>
                  <div className="border-2 border-gray-200 px-3 py-2">
                    <span className="text-red-600">{tag}</span>
                  </div>
                </>
              ))}
            </div>
          </Disclosure.Panel>
        </div>
      )}
    </Disclosure>
  );
};
export default Filter;
