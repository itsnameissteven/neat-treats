import React from 'react';

const Sun = ({ size = 48, color = 'black', ...props }: IIcon) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <mask id="path-1-inside-1_101_144" fill="white">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M22.68 6.36C22.68 5.6089 23.2889 5 24.04 5C24.7911 5 25.4 5.60889 25.4 6.36V9.08001C25.4 9.83111 24.7911 10.44 24.04 10.44C23.2889 10.44 22.68 9.83112 22.68 9.08001V6.36ZM23.9599 32.12C28.4666 32.12 32.1199 28.4666 32.1199 23.96C32.1199 19.4533 28.4666 15.7999 23.9599 15.7999C19.4533 15.7999 15.7999 19.4533 15.7999 23.96C15.7999 28.4666 19.4533 32.12 23.9599 32.12ZM23.9599 34.84C29.9688 34.84 34.84 29.9688 34.84 23.96C34.84 17.9511 29.9688 13.0799 23.9599 13.0799C17.9511 13.0799 13.0799 17.9511 13.0799 23.96C13.0799 29.9688 17.9511 34.84 23.9599 34.84ZM37.56 23.96C37.56 24.7111 38.1689 25.32 38.92 25.32H41.64C42.3911 25.32 43 24.7111 43 23.96C43 23.2089 42.3911 22.6 41.64 22.6H38.92C38.1689 22.6 37.56 23.2089 37.56 23.96ZM6.36 25.4C5.6089 25.4 5 24.7911 5 24.04C5 23.2889 5.60889 22.68 6.36 22.68H9.08001C9.83111 22.68 10.44 23.2889 10.44 24.04C10.44 24.7911 9.83112 25.4 9.08001 25.4H6.36ZM36.0467 11.4017C35.5156 10.8706 34.6545 10.8706 34.1234 11.4017L33.1617 12.3633C32.6306 12.8945 32.6306 13.7556 33.1617 14.2867C33.6929 14.8178 34.554 14.8178 35.0851 14.2867L36.0467 13.325C36.5779 12.7939 36.5779 11.9328 36.0467 11.4017ZM12.3634 33.1617C12.8945 32.6306 13.7556 32.6306 14.2867 33.1617C14.8178 33.6928 14.8178 34.5539 14.2867 35.0851L13.325 36.0467C12.7939 36.5778 11.9328 36.5778 11.4017 36.0467C10.8706 35.5156 10.8706 34.6545 11.4017 34.1234L12.3634 33.1617ZM33.1617 33.1617C32.6306 33.6928 32.6306 34.5539 33.1617 35.0851L34.1234 36.0467C34.6545 36.5778 35.5156 36.5778 36.0467 36.0467C36.5778 35.5156 36.5778 34.6545 36.0467 34.1234L35.0851 33.1617C34.5539 32.6306 33.6928 32.6306 33.1617 33.1617ZM11.4017 13.325C10.8706 12.7939 10.8706 11.9328 11.4017 11.4017C11.9328 10.8706 12.7939 10.8706 13.325 11.4017L14.2867 12.3633C14.8178 12.8945 14.8178 13.7556 14.2867 14.2867C13.7556 14.8178 12.8945 14.8178 12.3633 14.2867L11.4017 13.325ZM23.9599 37.56C23.2088 37.56 22.5999 38.1689 22.5999 38.92V41.64C22.5999 42.3911 23.2088 43 23.9599 43C24.711 43 25.3199 42.3911 25.3199 41.64V38.92C25.3199 38.1689 24.711 37.56 23.9599 37.56Z"
        />
      </mask>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M22.68 6.36C22.68 5.6089 23.2889 5 24.04 5C24.7911 5 25.4 5.60889 25.4 6.36V9.08001C25.4 9.83111 24.7911 10.44 24.04 10.44C23.2889 10.44 22.68 9.83112 22.68 9.08001V6.36ZM23.9599 32.12C28.4666 32.12 32.1199 28.4666 32.1199 23.96C32.1199 19.4533 28.4666 15.7999 23.9599 15.7999C19.4533 15.7999 15.7999 19.4533 15.7999 23.96C15.7999 28.4666 19.4533 32.12 23.9599 32.12ZM23.9599 34.84C29.9688 34.84 34.84 29.9688 34.84 23.96C34.84 17.9511 29.9688 13.0799 23.9599 13.0799C17.9511 13.0799 13.0799 17.9511 13.0799 23.96C13.0799 29.9688 17.9511 34.84 23.9599 34.84ZM37.56 23.96C37.56 24.7111 38.1689 25.32 38.92 25.32H41.64C42.3911 25.32 43 24.7111 43 23.96C43 23.2089 42.3911 22.6 41.64 22.6H38.92C38.1689 22.6 37.56 23.2089 37.56 23.96ZM6.36 25.4C5.6089 25.4 5 24.7911 5 24.04C5 23.2889 5.60889 22.68 6.36 22.68H9.08001C9.83111 22.68 10.44 23.2889 10.44 24.04C10.44 24.7911 9.83112 25.4 9.08001 25.4H6.36ZM36.0467 11.4017C35.5156 10.8706 34.6545 10.8706 34.1234 11.4017L33.1617 12.3633C32.6306 12.8945 32.6306 13.7556 33.1617 14.2867C33.6929 14.8178 34.554 14.8178 35.0851 14.2867L36.0467 13.325C36.5779 12.7939 36.5779 11.9328 36.0467 11.4017ZM12.3634 33.1617C12.8945 32.6306 13.7556 32.6306 14.2867 33.1617C14.8178 33.6928 14.8178 34.5539 14.2867 35.0851L13.325 36.0467C12.7939 36.5778 11.9328 36.5778 11.4017 36.0467C10.8706 35.5156 10.8706 34.6545 11.4017 34.1234L12.3634 33.1617ZM33.1617 33.1617C32.6306 33.6928 32.6306 34.5539 33.1617 35.0851L34.1234 36.0467C34.6545 36.5778 35.5156 36.5778 36.0467 36.0467C36.5778 35.5156 36.5778 34.6545 36.0467 34.1234L35.0851 33.1617C34.5539 32.6306 33.6928 32.6306 33.1617 33.1617ZM11.4017 13.325C10.8706 12.7939 10.8706 11.9328 11.4017 11.4017C11.9328 10.8706 12.7939 10.8706 13.325 11.4017L14.2867 12.3633C14.8178 12.8945 14.8178 13.7556 14.2867 14.2867C13.7556 14.8178 12.8945 14.8178 12.3633 14.2867L11.4017 13.325ZM23.9599 37.56C23.2088 37.56 22.5999 38.1689 22.5999 38.92V41.64C22.5999 42.3911 23.2088 43 23.9599 43C24.711 43 25.3199 42.3911 25.3199 41.64V38.92C25.3199 38.1689 24.711 37.56 23.9599 37.56Z"
        fill={color}
      />
      <path
        d="M34.1234 11.4017L33.1617 10.44L33.1617 10.44L34.1234 11.4017ZM36.0467 11.4017L35.0851 12.3633L35.0851 12.3633L36.0467 11.4017ZM33.1617 12.3633L34.1234 13.325L34.1234 13.325L33.1617 12.3633ZM33.1617 14.2867L32.2001 15.2483L32.2001 15.2483L33.1617 14.2867ZM36.0467 13.325L37.0084 14.2867L37.0084 14.2867L36.0467 13.325ZM14.2867 33.1617L15.2484 32.2001L15.2484 32.2L14.2867 33.1617ZM12.3634 33.1617L13.325 34.1234L13.325 34.1234L12.3634 33.1617ZM14.2867 35.0851L13.325 34.1234L13.325 34.1234L14.2867 35.0851ZM13.325 36.0467L12.3634 35.0851L12.3634 35.0851L13.325 36.0467ZM11.4017 36.0467L10.44 37.0084L10.44 37.0084L11.4017 36.0467ZM11.4017 34.1234L10.44 33.1617L10.44 33.1617L11.4017 34.1234ZM36.0467 36.0467L37.0084 37.0084L37.0084 37.0084L36.0467 36.0467ZM11.4017 13.325L10.44 14.2867L10.44 14.2867L11.4017 13.325ZM13.325 11.4017L14.2867 10.44L14.2867 10.44L13.325 11.4017ZM14.2867 12.3633L13.325 13.325L13.325 13.325L14.2867 12.3633ZM12.3633 14.2867L13.325 13.325L13.325 13.325L12.3633 14.2867ZM24.04 3.64C22.5378 3.64 21.32 4.85779 21.32 6.36H24.04V6.36V3.64ZM26.76 6.36C26.76 4.85778 25.5423 3.64 24.04 3.64V6.36V6.36H26.76ZM26.76 9.08001V6.36H24.04V9.08001H26.76ZM24.04 11.8C25.5423 11.8 26.76 10.5822 26.76 9.08001H24.04V9.08001V11.8ZM21.32 9.08001C21.32 10.5822 22.5378 11.8 24.04 11.8V9.08001V9.08001H21.32ZM21.32 6.36V9.08001H24.04V6.36H21.32ZM30.7599 23.96C30.7599 27.7155 27.7155 30.76 23.9599 30.76V33.48C29.2177 33.48 33.4799 29.2177 33.4799 23.96H30.7599ZM23.9599 17.16C27.7155 17.16 30.7599 20.2044 30.7599 23.96H33.4799C33.4799 18.7022 29.2177 14.4399 23.9599 14.4399V17.16ZM17.1599 23.96C17.1599 20.2044 20.2044 17.16 23.9599 17.16V14.4399C18.7022 14.4399 14.4399 18.7022 14.4399 23.96H17.1599ZM23.9599 30.76C20.2044 30.76 17.1599 27.7155 17.1599 23.96H14.4399C14.4399 29.2177 18.7022 33.48 23.9599 33.48V30.76ZM33.4799 23.96C33.4799 29.2177 29.2177 33.48 23.9599 33.48V36.2C30.7199 36.2 36.2 30.7199 36.2 23.96H33.4799ZM23.9599 14.4399C29.2177 14.4399 33.4799 18.7022 33.4799 23.96H36.2C36.2 17.2 30.7199 11.7199 23.9599 11.7199V14.4399ZM14.4399 23.96C14.4399 18.7022 18.7022 14.4399 23.9599 14.4399V11.7199C17.2 11.7199 11.7199 17.2 11.7199 23.96H14.4399ZM23.9599 33.48C18.7022 33.48 14.4399 29.2177 14.4399 23.96H11.7199C11.7199 30.7199 17.2 36.2 23.9599 36.2V33.48ZM38.92 23.96H38.92L36.2 23.96C36.2 25.4622 37.4177 26.68 38.92 26.68V23.96ZM41.64 23.96H38.92V26.68H41.64V23.96ZM41.64 23.96H41.64V26.68C43.1422 26.68 44.36 25.4622 44.36 23.96H41.64ZM41.64 23.96H41.64H44.36C44.36 22.4577 43.1422 21.24 41.64 21.24V23.96ZM38.92 23.96H41.64V21.24H38.92V23.96ZM38.92 23.96H38.92V21.24C37.4177 21.24 36.2 22.4577 36.2 23.96L38.92 23.96ZM3.64 24.04C3.64 25.5423 4.85779 26.76 6.36 26.76V24.04H6.36H3.64ZM6.36 21.32C4.85778 21.32 3.64 22.5378 3.64 24.04H6.36H6.36V21.32ZM9.08001 21.32H6.36V24.04H9.08001V21.32ZM11.8 24.04C11.8 22.5378 10.5822 21.32 9.08001 21.32V24.04H9.08001H11.8ZM9.08001 26.76C10.5822 26.76 11.8 25.5423 11.8 24.04H9.08001H9.08001V26.76ZM6.36 26.76H9.08001V24.04H6.36V26.76ZM35.0851 12.3633L35.0851 12.3633L37.0084 10.44C35.9462 9.37778 34.224 9.37778 33.1617 10.44L35.0851 12.3633ZM34.1234 13.325L35.0851 12.3633L33.1617 10.44L32.2001 11.4017L34.1234 13.325ZM34.1234 13.325L34.1234 13.325L32.2001 11.4017C31.1378 12.4639 31.1378 14.1861 32.2001 15.2483L34.1234 13.325ZM34.1234 13.325L34.1234 13.325L32.2001 15.2483C33.2623 16.3106 34.9845 16.3106 36.0467 15.2483L34.1234 13.325ZM35.0851 12.3633L34.1234 13.325L36.0467 15.2483L37.0084 14.2867L35.0851 12.3633ZM35.0851 12.3633L35.0851 12.3633L37.0084 14.2867C38.0706 13.2244 38.0706 11.5022 37.0084 10.44L35.0851 12.3633ZM15.2484 32.2C14.1861 31.1378 12.4639 31.1378 11.4017 32.2001L13.325 34.1234L13.325 34.1234L15.2484 32.2ZM15.2484 36.0467C16.3106 34.9845 16.3106 33.2623 15.2484 32.2001L13.325 34.1234L13.325 34.1234L15.2484 36.0467ZM14.2867 37.0084L15.2484 36.0467L13.325 34.1234L12.3634 35.0851L14.2867 37.0084ZM10.44 37.0084C11.5023 38.0706 13.2245 38.0706 14.2867 37.0084L12.3634 35.0851L12.3634 35.0851L10.44 37.0084ZM10.44 33.1617C9.37781 34.2239 9.37781 35.9462 10.44 37.0084L12.3634 35.0851L12.3634 35.0851L10.44 33.1617ZM11.4017 32.2L10.44 33.1617L12.3634 35.0851L13.325 34.1234L11.4017 32.2ZM34.1234 34.1234V34.1234L32.2 32.2001C31.1378 33.2623 31.1378 34.9845 32.2 36.0467L34.1234 34.1234ZM35.0851 35.0851L34.1234 34.1234L32.2 36.0467L33.1617 37.0084L35.0851 35.0851ZM35.0851 35.0851H35.0851L33.1617 37.0084C34.2239 38.0706 35.9462 38.0706 37.0084 37.0084L35.0851 35.0851ZM35.0851 35.0851L35.085 35.0851L37.0084 37.0084C38.0706 35.9462 38.0706 34.224 37.0084 33.1617L35.0851 35.0851ZM34.1234 34.1234L35.0851 35.0851L37.0084 33.1617L36.0467 32.2001L34.1234 34.1234ZM34.1234 34.1234L34.1234 34.1234L36.0467 32.2001C34.9845 31.1378 33.2623 31.1378 32.2 32.2001L34.1234 34.1234ZM10.44 10.44C9.37778 11.5022 9.37778 13.2245 10.44 14.2867L12.3633 12.3633L12.3633 12.3633L10.44 10.44ZM14.2867 10.44C13.2244 9.37778 11.5022 9.37779 10.44 10.44L12.3633 12.3633L12.3633 12.3633L14.2867 10.44ZM15.2483 11.4017L14.2867 10.44L12.3633 12.3633L13.325 13.325L15.2483 11.4017ZM15.2483 15.2483C16.3106 14.1861 16.3106 12.4639 15.2483 11.4017L13.325 13.325L13.325 13.325L15.2483 15.2483ZM11.4017 15.2483C12.4639 16.3106 14.1861 16.3106 15.2483 15.2483L13.325 13.325L13.325 13.325L11.4017 15.2483ZM10.44 14.2867L11.4017 15.2483L13.325 13.325L12.3633 12.3633L10.44 14.2867ZM23.9599 38.92V38.92L23.9599 36.2C22.4577 36.2 21.2399 37.4178 21.2399 38.92H23.9599ZM23.9599 41.64V38.92H21.2399V41.64H23.9599ZM23.9599 41.64V41.64H21.2399C21.2399 43.1422 22.4577 44.36 23.9599 44.36V41.64ZM23.9599 41.64V41.64V44.36C25.4622 44.36 26.6799 43.1422 26.6799 41.64H23.9599ZM23.9599 38.92V41.64H26.6799V38.92H23.9599ZM23.9599 38.92V38.92H26.6799C26.6799 37.4178 25.4621 36.2 23.9599 36.2L23.9599 38.92Z"
        fill={color}
        mask="url(#path-1-inside-1_101_144)"
      />
    </svg>
  );
};

export default Sun;
