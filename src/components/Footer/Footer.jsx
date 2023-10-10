

const Footer = () => {
  return (
<<<<<<< HEAD
    <div className="bg-[#071330] relative bottom-0 text-white flex pt-2  flex-col w-full justify-center items-center gap-6">
      <p className="text-center">
        {/* Reach us at{" "} */}
        <a
          className="hovera:underline-white hover:underline"
          href="mailto:foss@mec.ac.in"
        >
          {/* foss@mec.ac.in */}
        </a>{" "}
        {/* to know more{" "} */}
      </p>
      <div className="flex flex-row justify-center items-center">
        <a
          className="mx-2 svg-icon "
          href="https://www.instagram.com/foss_mec/"
          target="_blank"
          rel="noreferrer"
        >
          <svg
            width="30"
            height="30"
            viewBox="0 0 36 36"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M25.5 3H10.5C6.35786 3 3 6.35786 3 10.5V25.5C3 29.6421 6.35786 33 10.5 33H25.5C29.6421 33 33 29.6421 33 25.5V10.5C33 6.35786 29.6421 3 25.5 3Z"
              stroke="#fdd5df"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M24 17.055C24.1852 18.3034 23.9719 19.5783 23.3907 20.6985C22.8094 21.8187 21.8898 22.7271 20.7625 23.2945C19.6352 23.8619 18.3577 24.0594 17.1117 23.8589C15.8657 23.6584 14.7147 23.0701 13.8223 22.1778C12.9299 21.2854 12.3416 20.1343 12.1412 18.8883C11.9407 17.6424 12.1381 16.3649 12.7055 15.2376C13.2729 14.1103 14.1813 13.1906 15.3015 12.6094C16.4217 12.0281 17.6967 11.8149 18.945 12C20.2184 12.1889 21.3973 12.7822 22.3076 13.6925C23.2179 14.6027 23.8112 15.7816 24 17.055Z"
              stroke="#fdd5df"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M26.25 9.75H26.265"
              stroke="#fdd5df"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </a>
        <a
          className="mx-2 svg-icon"
          href="https://twitter.com/FossMec"
          target="_blank"
          rel="noreferrer"
        >
          <svg
            width="30"
            height="30"
            viewBox="0 0 36 36"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M34.5 4.50001C33.0636 5.51322 31.4732 6.28817 29.79 6.79501C28.8866 5.75627 27.686 5.02005 26.3506 4.6859C25.0151 4.35175 23.6092 4.4358 22.3231 4.92669C21.037 5.41757 19.9327 6.29161 19.1595 7.43058C18.3863 8.56956 17.9815 9.91851 18 11.295V12.795C15.364 12.8634 12.7519 12.2787 10.3965 11.0932C8.04112 9.90763 6.01548 8.15796 4.5 6.00001C4.5 6.00001 -1.5 19.5 12 25.5C8.91079 27.597 5.23074 28.6484 1.5 28.5C15 36 31.5 28.5 31.5 11.25C31.4986 10.8322 31.4584 10.4154 31.38 10.005C32.9109 8.49525 33.9912 6.58908 34.5 4.50001Z"
              stroke="#fdd5df"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </a>
        <a className="mx-2" href="https://www.linkedin.com/company/fossmec">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            viewBox="0 0 24 24"
            stroke="#fdd5df"
            strokeWidth="0.9"
            fill="none"
          >
            <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
          </svg>
        </a>
        <a
          className="mx-2"
          href="https://github.com/FossMec"
          target="_blank"
          rel="noreferrer"
        >
          <svg
            width="30"
            height="30"
            viewBox="0 0 36 36"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M13.5 28.5C6 30.75 6 24.75 3 24M24 33V27.195C24.0563 26.4798 23.9596 25.7607 23.7165 25.0857C23.4734 24.4107 23.0894 23.7952 22.59 23.28C27.3 22.755 32.25 20.97 32.25 12.78C32.2496 10.6858 31.444 8.67183 30 7.15503C30.6838 5.32279 30.6354 3.29755 29.865 1.50003C29.865 1.50003 28.095 0.975029 24 3.72003C20.562 2.78826 16.938 2.78826 13.5 3.72003C9.405 0.975029 7.635 1.50003 7.635 1.50003C6.86456 3.29755 6.81622 5.32279 7.5 7.15503C6.04519 8.68308 5.23878 10.7152 5.25 12.825C5.25 20.955 10.2 22.74 14.91 23.325C14.4165 23.835 14.0359 24.4431 13.793 25.1099C13.55 25.7767 13.4502 26.4871 13.5 27.195V33"
              stroke="#fdd5df"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </a>
        <a
          className="mx-2"
          href="https://mastodon.social/@FOSS_MEC"
          target="_blank"
          rel="noreferrer"
        >
          <svg
            width="30"
            height="30"
            viewBox="0 0 28.125 28.125001"
            fill="none"
          >
            <path
              stroke="#fdd5df"
              strokeWidth="1"
              d="m 26.621257,16.860652 c -0.385642,1.983972 -3.453956,4.155233 -6.977919,4.57603 -1.837594,0.219263 -3.646853,0.420797 -5.576122,0.332304 -3.155141,-0.144559 -5.6447656,-0.753101 -5.6447656,-0.753101 0,0.30715 0.018941,0.599601 0.056823,0.873111 0.4101895,3.113774 3.0875596,3.300306 5.6237026,3.387284 2.559783,0.08758 4.839085,-0.631119 4.839085,-0.631119 l 0.105162,2.314154 c 0,0 -1.79047,0.961452 -4.980007,1.138287 -1.758799,0.09668 -3.942638,-0.04425 -6.4862072,-0.717491 C 2.0644374,25.919976 1.1157132,20.039583 0.97054824,14.07297 0.92630171,12.301442 0.95357697,10.630985 0.95357697,9.2338853 c 0,-6.101171 3.99749133,-7.8895184 3.99749133,-7.8895184 C 6.9667095,0.41867514 10.425363,0.02939666 14.021,0 h 0.08834 c 3.595636,0.02939666 7.056562,0.41867514 9.072052,1.3443669 0,0 3.99734,1.7883474 3.99734,7.8895184 0,0 0.05016,4.5014777 -0.557476,7.6267667"
            />
            <path
              d="M 22.463581,9.7072019 V 17.094704 H 19.536796 V 9.9243431 c 0,-1.5115035 -0.635969,-2.2786957 -1.908056,-2.2786957 -1.406494,0 -2.111408,0.9100843 -2.111408,2.7096446 v 3.924758 h -2.909511 v -3.924758 c 0,-1.7995603 -0.705066,-2.7096446 -2.11156,-2.7096446 -1.2720874,0 -1.9080554,0.7671922 -1.9080554,2.2786957 V 17.094704 H 5.6614195 V 9.7072019 c 0,-1.5098367 0.3844295,-2.7096449 1.1566222,-3.5973028 C 7.6143275,5.2222412 8.6571514,4.767199 9.9516652,4.767199 c 1.4977148,0 2.6319108,0.5756594 3.3818288,1.7271296 l 0.729007,1.2220829 0.729158,-1.2220829 c 0.749766,-1.1514702 1.883962,-1.7271296 3.381828,-1.7271296 1.294363,0 2.337186,0.4550422 3.133624,1.3427001 0.772041,0.8876579 1.15647,2.0874661 1.15647,3.5973028"
              stroke="#fdd5df"
              strokeWidth="1"
            />
          </svg>
        </a>
      </div>
      <div className="p-2 text-center text-sm flex justify-center items-center w-full bg-[#071330]">
        Copyright @ 2023 | FOSSMEC
      </div>
=======
    <div className="bg-fosspurple w-full h-[200px]">
      <img src="https://s3-alpha-sig.figma.com/img/0744/3a6a/5668e3e3d25cb5cc5228f2627f82c196?Expires=1697414400&Signature=A7Ume9YayB4ViVK~hWUqmKab-nhQlfVnhw2ehy4Qu65UQSRJdB5s4bOa9NbW6qVvXF4ZmGnk39m7RpryJ-Q9XHwMBMCW2~eWOaaJ0M7oXMok4h3hHMqL6ZXfdVsbqwusYBFw2voG6G1N6p3TglgzcbV7UohLjHpsyIrfC4l7MZ672vSn7olu08uIjJysxDA-5m3UwVe-5Dnfzu9n674HoLHWMw55mtb83vIaMNlOWKnODt1DAVp3BhwvRQNOWjhmteGltTvtzaav-6pesxy5BZA4WdNlRkceje9qvFo9mr6eoMlJafITb-4xXyJHDo1q4S0SPwVa8Qi-X~CkGfUKFw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" alt="fossmec-logo"
        className=" max-w-[120px] ml-auto mr-auto pt-[10px] pb-[6px]" />
        <div className="flex flex-row justify-center w-[150px] h-[15px] justify-between ml-auto mr-auto">

          <a href="https://www.instagram.com/foss_mec/" target="_blank">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="20" viewBox="0 0 24 24" fill="none" >
              <path d="M17.34 5.46C17.1027 5.46 16.8707 5.53038 16.6733 5.66224C16.476 5.79409 16.3222 5.98151 16.2313 6.20078C16.1405 6.42005 16.1168 6.66133 16.1631 6.89411C16.2094 7.12689 16.3236 7.34071 16.4915 7.50853C16.6593 7.67635 16.8731 7.79064 17.1059 7.83694C17.3387 7.88324 17.5799 7.85948 17.7992 7.76866C18.0185 7.67783 18.2059 7.52402 18.3378 7.32668C18.4696 7.12935 18.54 6.89734 18.54 6.66C18.54 6.34174 18.4136 6.03652 18.1885 5.81147C17.9635 5.58643 17.6583 5.46 17.34 5.46ZM21.94 7.88C21.9206 7.0503 21.7652 6.2294 21.48 5.45C21.2257 4.78313 20.83 4.17928 20.32 3.68C19.8248 3.16743 19.2196 2.77418 18.55 2.53C17.7727 2.23616 16.9508 2.07721 16.12 2.06C15.06 2 14.72 2 12 2C9.28 2 8.94 2 7.88 2.06C7.04915 2.07721 6.22734 2.23616 5.45 2.53C4.78168 2.77665 4.17693 3.16956 3.68 3.68C3.16743 4.17518 2.77418 4.78044 2.53 5.45C2.23616 6.22734 2.07721 7.04915 2.06 7.88C2 8.94 2 9.28 2 12C2 14.72 2 15.06 2.06 16.12C2.07721 16.9508 2.23616 17.7727 2.53 18.55C2.77418 19.2196 3.16743 19.8248 3.68 20.32C4.17693 20.8304 4.78168 21.2234 5.45 21.47C6.22734 21.7638 7.04915 21.9228 7.88 21.94C8.94 22 9.28 22 12 22C14.72 22 15.06 22 16.12 21.94C16.9508 21.9228 17.7727 21.7638 18.55 21.47C19.2196 21.2258 19.8248 20.8326 20.32 20.32C20.8322 19.8226 21.2283 19.2182 21.48 18.55C21.7652 17.7706 21.9206 16.9497 21.94 16.12C21.94 15.06 22 14.72 22 12C22 9.28 22 8.94 21.94 7.88ZM20.14 16C20.1327 16.6348 20.0178 17.2637 19.8 17.86C19.6403 18.2952 19.3839 18.6884 19.05 19.01C18.7256 19.3405 18.3332 19.5964 17.9 19.76C17.3037 19.9778 16.6748 20.0927 16.04 20.1C15.04 20.15 14.67 20.16 12.04 20.16C9.41 20.16 9.04 20.16 8.04 20.1C7.38089 20.1123 6.72459 20.0109 6.1 19.8C5.68578 19.6281 5.31136 19.3728 5 19.05C4.66809 18.7287 4.41484 18.3352 4.26 17.9C4.01586 17.2952 3.88044 16.6519 3.86 16C3.86 15 3.8 14.63 3.8 12C3.8 9.37 3.8 9 3.86 8C3.86448 7.35106 3.98295 6.70795 4.21 6.1C4.38605 5.67791 4.65627 5.30166 5 5C5.30381 4.65617 5.67929 4.3831 6.1 4.2C6.70955 3.98004 7.352 3.86508 8 3.86C9 3.86 9.37 3.8 12 3.8C14.63 3.8 15 3.8 16 3.86C16.6348 3.86728 17.2637 3.98225 17.86 4.2C18.3144 4.36865 18.7223 4.64285 19.05 5C19.3777 5.30718 19.6338 5.68273 19.8 6.1C20.0223 6.70893 20.1373 7.35178 20.14 8C20.19 9 20.2 9.37 20.2 12C20.2 14.63 20.19 15 20.14 16ZM12 6.87C10.9858 6.87198 9.99496 7.17453 9.15265 7.73942C8.31035 8.30431 7.65438 9.1062 7.26763 10.0438C6.88089 10.9813 6.78072 12.0125 6.97979 13.0069C7.17886 14.0014 7.66824 14.9145 8.38608 15.631C9.10392 16.3474 10.018 16.835 11.0129 17.0321C12.0077 17.2293 13.0387 17.1271 13.9755 16.7385C14.9123 16.35 15.7129 15.6924 16.2761 14.849C16.8394 14.0056 17.14 13.0142 17.14 12C17.1413 11.3251 17.0092 10.6566 16.7512 10.033C16.4933 9.40931 16.1146 8.84281 15.6369 8.36605C15.1592 7.88929 14.5919 7.51168 13.9678 7.25493C13.3436 6.99818 12.6749 6.86736 12 6.87ZM12 15.33C11.3414 15.33 10.6976 15.1347 10.15 14.7688C9.60234 14.4029 9.17552 13.8828 8.92348 13.2743C8.67144 12.6659 8.6055 11.9963 8.73398 11.3503C8.86247 10.7044 9.17963 10.111 9.64533 9.64533C10.111 9.17963 10.7044 8.86247 11.3503 8.73398C11.9963 8.6055 12.6659 8.67144 13.2743 8.92348C13.8828 9.17552 14.4029 9.60234 14.7688 10.15C15.1347 10.6976 15.33 11.3414 15.33 12C15.33 12.4373 15.2439 12.8703 15.0765 13.2743C14.9092 13.6784 14.6639 14.0454 14.3547 14.3547C14.0454 14.6639 13.6784 14.9092 13.2743 15.0765C12.8703 15.2439 12.4373 15.33 12 15.33Z" fill="#E0E2E3"/>
            </svg>
          </a>

          <a href="https://www.linkedin.com/company/fossmec/"target="_blank" >
            <svg  xmlns="http://www.w3.org/2000/svg" width="24" height="20" viewBox="0 0 24 24" fill="none">
              <path d="M20.4701 1.9999H3.53006C3.33964 1.99725 3.15056 2.03214 2.97362 2.10258C2.79669 2.17302 2.63536 2.27762 2.49886 2.41041C2.36235 2.5432 2.25334 2.70158 2.17805 2.87651C2.10276 3.05143 2.06267 3.23947 2.06006 3.4299V20.5699C2.06267 20.7603 2.10276 20.9484 2.17805 21.1233C2.25334 21.2982 2.36235 21.4566 2.49886 21.5894C2.63536 21.7222 2.79669 21.8268 2.97362 21.8972C3.15056 21.9676 3.33964 22.0025 3.53006 21.9999H20.4701C20.6605 22.0025 20.8496 21.9676 21.0265 21.8972C21.2034 21.8268 21.3648 21.7222 21.5013 21.5894C21.6378 21.4566 21.7468 21.2982 21.8221 21.1233C21.8974 20.9484 21.9375 20.7603 21.9401 20.5699V3.4299C21.9375 3.23947 21.8974 3.05143 21.8221 2.87651C21.7468 2.70158 21.6378 2.5432 21.5013 2.41041C21.3648 2.27762 21.2034 2.17302 21.0265 2.10258C20.8496 2.03214 20.6605 1.99725 20.4701 1.9999ZM8.09006 18.7399H5.09006V9.7399H8.09006V18.7399ZM6.59006 8.4799C6.17632 8.4799 5.77953 8.31554 5.48697 8.02298C5.19442 7.73043 5.03006 7.33363 5.03006 6.9199C5.03006 6.50616 5.19442 6.10937 5.48697 5.81681C5.77953 5.52425 6.17632 5.3599 6.59006 5.3599C6.80975 5.33498 7.03224 5.35675 7.24293 5.42378C7.45363 5.49081 7.6478 5.60159 7.81272 5.74886C7.97763 5.89613 8.10958 6.07657 8.19993 6.27838C8.29028 6.48018 8.33698 6.69879 8.33698 6.9199C8.33698 7.141 8.29028 7.35961 8.19993 7.56141C8.10958 7.76322 7.97763 7.94366 7.81272 8.09093C7.6478 8.23821 7.45363 8.34898 7.24293 8.41601C7.03224 8.48304 6.80975 8.50481 6.59006 8.4799ZM18.9101 18.7399H15.9101V13.9099C15.9101 12.6999 15.4801 11.9099 14.3901 11.9099C14.0527 11.9124 13.7242 12.0182 13.4489 12.2131C13.1735 12.408 12.9645 12.6826 12.8501 12.9999C12.7718 13.2349 12.7379 13.4825 12.7501 13.7299V18.7299H9.75006C9.75006 18.7299 9.75006 10.5499 9.75006 9.7299H12.7501V10.9999C13.0226 10.527 13.419 10.1374 13.8965 9.8731C14.374 9.60878 14.9146 9.47975 15.4601 9.4999C17.4601 9.4999 18.9101 10.7899 18.9101 13.5599V18.7399Z" fill="#E0E2E3"/>
            </svg>
          </a>

          <a href="https://github.com/FossMec"target="_blank" >
            <svg  xmlns="http://www.w3.org/2000/svg" width="24" height="20" viewBox="0 0 24 24" fill="none">
              <path d="M12 2.24658C9.6255 2.24668 7.32849 3.0917 5.51999 4.63043C3.71149 6.16916 2.50953 8.3012 2.12916 10.6451C1.74879 12.9889 2.21485 15.3917 3.44393 17.4233C4.67301 19.455 6.58491 20.9831 8.83755 21.7341C9.33755 21.8216 9.52505 21.5216 9.52505 21.2591C9.52505 21.0216 9.51254 20.2341 9.51254 19.3966C7.00003 19.8591 6.35003 18.7841 6.15003 18.2216C5.9281 17.6745 5.5763 17.1897 5.12503 16.8091C4.77503 16.6216 4.27503 16.1591 5.11252 16.1466C5.4323 16.1813 5.73901 16.2926 6.00666 16.471C6.2743 16.6494 6.49499 16.8897 6.65003 17.1716C6.7868 17.4173 6.97071 17.6336 7.19122 17.8081C7.41173 17.9826 7.6645 18.1118 7.93506 18.1885C8.20562 18.2651 8.48864 18.2876 8.76791 18.2547C9.04717 18.2218 9.3172 18.134 9.56251 17.9966C9.6058 17.4882 9.83237 17.0129 10.2 16.6591C7.97503 16.4091 5.65003 15.5466 5.65003 11.7216C5.63597 10.7278 6.00271 9.76619 6.67503 9.03411C6.36931 8.17033 6.40508 7.2224 6.77503 6.38411C6.77503 6.38411 7.6125 6.1216 9.52503 7.40911C11.1613 6.95909 12.8887 6.95909 14.525 7.40911C16.4375 6.10911 17.275 6.38411 17.275 6.38411C17.645 7.22238 17.6808 8.17034 17.375 9.03411C18.0494 9.76494 18.4164 10.7273 18.4 11.7216C18.4 15.5591 16.0625 16.4091 13.8375 16.6591C14.0762 16.901 14.26 17.1914 14.3764 17.5106C14.4929 17.8298 14.5393 18.1704 14.5125 18.5091C14.5125 19.8466 14.5 20.9216 14.5 21.2591C14.5 21.5216 14.6875 21.8341 15.1875 21.7341C17.4362 20.977 19.3426 19.4453 20.5664 17.4126C21.7903 15.3799 22.2519 12.9784 21.8689 10.6368C21.4859 8.29523 20.2832 6.16595 18.4755 4.62909C16.6678 3.09223 14.3727 2.24782 12 2.24658Z" fill="#E0E2E3"/>
            </svg>
          </a>  

          <a href="https://x.com/FossMec"target="_blank" >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="20" viewBox="0 0 24 24" fill="none">
              <path d="M4.83771 2.79565L10.3954 12.9492L4.80261 21.2044H6.06133L10.9578 13.9768L14.914 21.2044H19.1975L13.3271 10.4798L18.5328 2.79565H17.2741L12.7647 9.45211L9.12116 2.79565H4.83771ZM6.68874 4.06248H8.65657L17.3462 19.9374H15.3783L6.68874 4.06248Z" fill="#E0E2E3"/>
            </svg>
          </a>

        </div>
      <p className=" text-center ml-auto mr-auto font-semibold text-xs pb-[5px] pt-[20px] opacity-40">Copyright @ 2023 | FOSS MEC</p>
>>>>>>> ab1228fa0933df7c69884a0067c13063b5a5eb33
    </div>
  );
}

export default Footer;