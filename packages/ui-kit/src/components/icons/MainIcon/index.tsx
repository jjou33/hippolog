import type { IconPropsType } from "../../icon";

const MainIconSet: IconPropsType = {
  moon: {
    icon: () => (
      <svg
        width={"100%"}
        height={"100%"}
        viewBox={"0 0 24 24"}
        fill={"none"}
        xmlns={"http://www.w3.org/2000/svg"}
      >
        <path
          d={
            "M12 22C17.5228 22 22 17.5228 22 12C22 11.5373 21.3065 11.4608 21.0672 11.8568C19.9289 13.7406 17.8615 15 15.5 15C11.9101 15 9 12.0899 9 8.5C9 6.13845 10.2594 4.07105 12.1432 2.93276C12.5392 2.69347 12.4627 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
          }
          fill={"#fffd77"}
        />
      </svg>
    ),
  },
  sun: {
    icon: () => (
      <svg
        width={"100%"}
        height={"100%"}
        viewBox={"0 0 36 36"}
        aria-hidden={"true"}
        role={"img"}
        preserveAspectRatio={"xMidYMid meet"}
      >
        <path
          fill={"#FFAC33"}
          d={
            "M16 2s0-2 2-2s2 2 2 2v2s0 2-2 2s-2-2-2-2V2zm18 14s2 0 2 2s-2 2-2 2h-2s-2 0-2-2s2-2 2-2h2zM4 16s2 0 2 2s-2 2-2 2H2s-2 0-2-2s2-2 2-2h2zm5.121-8.707s1.414 1.414 0 2.828s-2.828 0-2.828 0L4.878 8.708s-1.414-1.414 0-2.829c1.415-1.414 2.829 0 2.829 0l1.414 1.414zm21 21s1.414 1.414 0 2.828s-2.828 0-2.828 0l-1.414-1.414s-1.414-1.414 0-2.828s2.828 0 2.828 0l1.414 1.414zm-.413-18.172s-1.414 1.414-2.828 0s0-2.828 0-2.828l1.414-1.414s1.414-1.414 2.828 0s0 2.828 0 2.828l-1.414 1.414zm-21 21s-1.414 1.414-2.828 0s0-2.828 0-2.828l1.414-1.414s1.414-1.414 2.828 0s0 2.828 0 2.828l-1.414 1.414zM16 32s0-2 2-2s2 2 2 2v2s0 2-2 2s-2-2-2-2v-2z"
          }
        />
        <circle fill={"#FFAC33"} cx={"18"} cy={"18"} r={"10"} />
      </svg>
    ),
  },
  Divider2: {
    icon: () => (
      <div>
        <div>
          <svg
            id={""}
            preserveAspectRatio={"xMidYMax meet"}
            viewBox={"0 0 1600 200"}
            display={"block"}
            data-height={"200"}
          >
            <polygon
              fill={"white"}
              points={
                "-4,188.586 174,76 292,124 402,60 536,108 752,8 882,66 990,32 1210,116 1380,64 1536,150 1604,115.09 1604,204 -4,204 "
              }
            />
            <polygon
              opacity={"1"}
              fill={"#95a5a6"}
              points={"174,76 174,78 -4,198 -4,188.586 "}
            />
            <polygon
              opacity={"1"}
              fill={"#95a5a6"}
              points={"292,124 302,138 402,64 402,60 "}
            />
            <polygon
              opacity={"1"}
              fill={"#95a5a6"}
              points={"536,108 544,120 752,12 752,8 "}
            />
            <polygon
              opacity={"1"}
              fill={"#95a5a6"}
              points={"882,66 890,78 990,36 990,32 "}
            />
            <polygon
              opacity={"1"}
              fill={"#95a5a6"}
              points={"1210,116 1222,130 1380,68 1380,64 "}
            />
            <polygon
              opacity={"1"}
              fill={"#95a5a6"}
              points={"1536,150 1546,164 1604,124 1604,115.09 "}
            />
            <polygon
              opacity={"1"}
              fill={"#34495e"}
              points={"174,76 292,124 282,140 174,78 "}
            />
            <polygon
              opacity={"1"}
              fill={"#34495e"}
              points={"402,60 536,108 528,120 402,64 "}
            />
            <polygon
              opacity={"1"}
              fill={"#34495e"}
              points={"752,8 882,66 874,80 752,12 "}
            />
            <polygon
              opacity={"1"}
              fill={"#34495e"}
              points={"990,32 990,36 1192,130 1210,116 "}
            />
            <polygon
              opacity={"1"}
              fill={"#34495e"}
              points={"1380,64 1536,150 1526,168 1380,68 "}
            />
          </svg>
        </div>
      </div>
    ),
  },

  Go: {
    icon: (color?: string) => (
      <svg
        width={"100%"}
        height={"100%"}
        viewBox={"0 0 24 24"}
        fill={color}
        xmlns={"http://www.w3.org/2000/svg"}
      >
        <path
          d={"M4 12H20M20 12L14 6M20 12L14 18"}
          stroke={"#1C274C"}
          strokeWidth={"1.5"}
          strokeLinecap={"round"}
          strokeLinejoin={"round"}
        />
      </svg>
    ),
  },
  Arrow: {
    icon: (color?: string) => (
      <svg
        fill={color}
        width={"100%"}
        height={"100%"}
        viewBox={"0 0 32 32"}
        version={"1.1"}
        xmlns={"http://www.w3.org/2000/svg"}
      >
        <path
          d={
            "M23.505 0c0.271 0 0.549 0.107 0.757 0.316 0.417 0.417 0.417 1.098 0 1.515l-14.258 14.264 14.050 14.050c0.417 0.417 0.417 1.098 0 1.515s-1.098 0.417-1.515 0l-14.807-14.807c-0.417-0.417-0.417-1.098 0-1.515l15.015-15.022c0.208-0.208 0.486-0.316 0.757-0.316z"
          }
        />
      </svg>
    ),
  },
  Git: {
    icon: () => (
      <svg
        width={"100%"}
        height={"100%"}
        viewBox={"0 0 48 48"}
        fill={"none"}
        xmlns={"http://www.w3.org/2000/svg"}
      >
        <circle cx={"24"} cy={"24"} r={"20"} fill={"#181717"} />
        <path
          d={
            "M6.81348 34.235C9.24811 38.3138 13.0939 41.4526 17.6772 42.9784C18.6779 43.1614 19.0425 42.5438 19.0425 42.0134C19.0425 41.7938 19.0388 41.4058 19.0339 40.8866C19.0282 40.2852 19.0208 39.5079 19.0155 38.6124C13.4524 39.8206 12.2787 35.931 12.2787 35.931C11.3689 33.6215 10.0576 33.0064 10.0576 33.0064C8.2417 31.7651 10.1951 31.7896 10.1951 31.7896C12.2025 31.9321 13.2584 33.8511 13.2584 33.8511C15.0424 36.9071 17.94 36.0243 19.0794 35.5135C19.2611 34.2207 19.7767 33.3391 20.3489 32.8394C15.908 32.3348 11.2387 30.6183 11.2387 22.9545C11.2387 20.7715 12.0184 18.9863 13.2977 17.5879C13.0914 17.082 12.4051 15.0488 13.4929 12.2949C13.4929 12.2949 15.1725 11.7571 18.9934 14.3453C20.5883 13.9021 22.2998 13.6798 24.0003 13.6725C25.6983 13.6798 27.4099 13.9021 29.0072 14.3453C32.8256 11.7571 34.5016 12.2949 34.5016 12.2949C35.5931 15.0488 34.9067 17.082 34.7005 17.5879C35.9823 18.9863 36.757 20.7715 36.757 22.9545C36.757 30.638 32.0804 32.3286 27.6247 32.8234C28.343 33.441 28.9827 34.6614 28.9827 36.5277C28.9827 38.3152 28.9717 39.8722 28.9644 40.9035C28.9608 41.4143 28.9581 41.7962 28.9581 42.0134C28.9581 42.5487 29.3178 43.1712 30.3332 42.976C33.9844 41.7572 37.1671 39.5154 39.5403 36.5903C35.8734 41.1108 30.274 44 23.9997 44C16.6943 44 10.3038 40.0832 6.81348 34.235Z"
          }
          fill={"white"}
        />
      </svg>
    ),
  },
  Menu: {
    icon: () => (
      <svg
        width={"100%"}
        height={"100%"}
        viewBox={"0 0 24 24"}
        fill={"none"}
        xmlns={"http://www.w3.org/2000/svg"}
      >
        <path
          d={"M4 6H20M4 12H20M4 18H20"}
          stroke={"#C7C7CC"}
          strokeWidth={"2"}
          strokeLinecap={"round"}
          strokeLinejoin={"round"}
        />
      </svg>
    ),
  },
  Wave: {
    icon: () => (
      <svg
        className={"editorial"}
        xmlns={"http://www.w3.org/2000/svg"}
        viewBox={"0 24 150 28 "}
        preserveAspectRatio={"none"}
      >
        <defs>
          <path
            id={"gentle-wave"}
            d="M-160 44c30 0 
    58-18 88-18s
    58 18 88 18 
    58-18 88-18 
    58 18 88 18
    v44h-352z"
          />
        </defs>
        <g className={"parallax1"}>
          <use xlinkHref={"#gentle-wave"} x={"50"} y={"3"} fill={"#f461c1"} />
        </g>
        <g className={"parallax2"}>
          <use xlinkHref={"#gentle-wave"} x={"50"} y={"0"} fill={"#4579e2"} />
        </g>
        <g className={"parallax3"}>
          <use xlinkHref={"#gentle-wave"} x={"50"} y={"9"} fill={"#3461c1"} />
        </g>
        <g className={"parallax4"}>
          <use xlinkHref={"#gentle-wave"} x={"50"} y={"6"} fill={"#fff"} />
        </g>
      </svg>
    ),
  },
  Calander: {
    icon: () => (
      <svg width={"100%"} height={"100%"} viewBox={"0 0 24 24"} version={"1.1"}>
        <g transform={"translate(0 -1028.4)"}>
          <path
            d={
              "m5 1032.4c-1.1046 0-2 0.9-2 2v14c0 1.1 0.8954 2 2 2h6 2 6c1.105 0 2-0.9 2-2v-14c0-1.1-0.895-2-2-2h-6-2-6z"
            }
            fill={"#bdc3c7"}
          />
          <path
            d={
              "m5 3c-1.1046 0-2 0.8954-2 2v14c0 1.105 0.8954 2 2 2h6 2 6c1.105 0 2-0.895 2-2v-14c0-1.1046-0.895-2-2-2h-6-2-6z"
            }
            transform={"translate(0 1028.4)"}
            fill={"#ecf0f1"}
          />
          <path
            d={
              "m5 3c-1.1046 0-2 0.8954-2 2v3 1h18v-1-3c0-1.1046-0.895-2-2-2h-6-2-6z"
            }
            transform={"translate(0 1028.4)"}
            fill={"#e74c3c"}
          />
          <path
            d={"m7 5.5a1.5 1.5 0 1 1 -3 0 1.5 1.5 0 1 1 3 0z"}
            transform={"translate(.5 1028.4)"}
            fill={"#c0392b"}
          />
          <path
            d={"m7 5.5a1.5 1.5 0 1 1 -3 0 1.5 1.5 0 1 1 3 0z"}
            transform={"translate(12.5 1028.4)"}
            fill={"#c0392b"}
          />
          <g fill={"#bdc3c7"}>
            <path
              d={
                "m5 1039.4v2h2v-2h-2zm3 0v2h2v-2h-2zm3 0v2h2v-2h-2zm3 0v2h2v-2h-2zm3 0v2h2v-2h-2z"
              }
            />
            <path
              d={
                "m5 1042.4v2h2v-2h-2zm3 0v2h2v-2h-2zm3 0v2h2v-2h-2zm3 0v2h2v-2h-2zm3 0v2h2v-2h-2z"
              }
            />
            <path
              d={
                "m5 1045.4v2h2v-2h-2zm3 0v2h2v-2h-2zm3 0v2h2v-2h-2zm3 0v2h2v-2h-2zm3 0v2h2v-2h-2z"
              }
            />
          </g>
          <path
            d={"m24 12a12 12 0 1 1 -24 0 12 12 0 1 1 24 0z"}
            transform={"matrix(.42014 0 0 .42014 13.458 1041.8)"}
            fill={"#34495e"}
          />
          <path
            d={
              "m18.5 1041.8c-3.038 0-5.5 2.5-5.5 5.5h0.917c0-2.5 2.052-4.6 4.583-4.6s4.583 2.1 4.583 4.6h0.917c0-3-2.462-5.5-5.5-5.5z"
            }
            fill={"#2c3e50"}
          />
          <path
            d={
              "m18.958 1046.4v0.9h0.459 2.75c0.253 0 0.458-0.2 0.458-0.4 0-0.3-0.205-0.5-0.458-0.5h-2.75-0.459z"
            }
            fill={"#bdc3c7"}
          />
          <path
            d={
              "m18.5 1043.7c-0.253 0-0.458 0.2-0.458 0.4v1.8 0.5h0.916v-0.5-1.8c0-0.2-0.205-0.4-0.458-0.4z"
            }
            fill={"#bdc3c7"}
          />
          <rect
            transform={"rotate(-45)"}
            height={".45833"}
            width={"3.2083"}
            y={"753.12"}
            x={"-730.83"}
            fill={"#c0392b"}
          />
          <path
            d={
              "m18.5 1045.9c-0.506 0-0.917 0.5-0.917 1s0.411 0.9 0.917 0.9 0.917-0.4 0.917-0.9-0.411-1-0.917-1zm0 0.5c0.253 0 0.458 0.2 0.458 0.5 0 0.2-0.205 0.4-0.458 0.4s-0.458-0.2-0.458-0.4c0-0.3 0.205-0.5 0.458-0.5z"
            }
            fill={"#bdc3c7"}
          />
          <path
            d={
              "m18.5 1041.4c-3.038 0-5.5 2.4-5.5 5.5 0 3 2.462 5.5 5.5 5.5s5.5-2.5 5.5-5.5c0-3.1-2.462-5.5-5.5-5.5zm0 0.9c2.531 0 4.583 2 4.583 4.6 0 2.5-2.052 4.5-4.583 4.5s-4.583-2-4.583-4.5c0-2.6 2.052-4.6 4.583-4.6z"
            }
            fill={"#95a5a6"}
          />
          <path
            d={"m13 12a1 1 0 1 1 -2 0 1 1 0 1 1 2 0z"}
            transform={"matrix(.45833 0 0 .45833 13 1041.4)"}
            fill={"#2c3e50"}
          />
          <path
            d={
              "m19.293 1046.4c0.078 0.1 0.129 0.3 0.129 0.5 0 0.1-0.051 0.3-0.129 0.4h0.129 0.372c0.052-0.1 0.086-0.3 0.086-0.4 0-0.2-0.034-0.4-0.086-0.5h-0.372-0.129z"
            }
            fill={"#95a5a6"}
          />
          <path
            d={
              "m6 1c-0.5523 0-1 0.4477-1 1v3c0 0.5523 0.4477 1 1 1s1-0.4477 1-1v-3c0-0.5523-0.4477-1-1-1zm12 0c-0.552 0-1 0.4477-1 1v3c0 0.5523 0.448 1 1 1s1-0.4477 1-1v-3c0-0.5523-0.448-1-1-1z"
            }
            transform={"translate(0 1028.4)"}
            fill={"#95a5a6"}
          />
          <path
            d={
              "m6 1029.4c-0.5523 0-1 0.4-1 1v2h2v-2c0-0.6-0.4477-1-1-1zm12 0c-0.552 0-1 0.4-1 1v2h2v-2c0-0.6-0.448-1-1-1z"
            }
            fill={"#bdc3c7"}
          />
        </g>
      </svg>
    ),
  },
};

export default MainIconSet;