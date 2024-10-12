import React from "react";
import { Avatar } from "antd";
import { HeroItem } from "./HeroSectionItems";
import { Link } from "react-router-dom";

// // Images (Replace with actual image paths)
// import HTMLIcon from "/path-to-html-icon.png";
// import CSSIcon from "/path-to-css-icon.png";
// import JSIcon from "/path-to-js-icon.png";
// import ReactIcon from "/path-to-react-icon.png";
// import FigmaIcon from "/path-to-figma-icon.png";

// Main Hero Section
const HeroSection = () => {
  // const pics = [
  //   {
  //     url: "https://s3-alpha-sig.figma.com/img/6405/b314/68db8ea561a27064e67d06d024404030?Expires=1729468800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=WIX7f3Fe52-Shpu4td9BYj9RSTp2IA1E0Ig9oPqYFRFWiJ7g0HTF~RRI69jh1bUhXqb3EDOX0KA~rvdKjK6D4-rfZBJpyGvLwsvRUeJkZiqHOZO7KizDbHpWaSFJYN-lbTC763Mccoy0-C2Bl4y8qlVbAPfdu4m8RJp1RjNQbpT0VsiF0Nusk7g3WoRjyL7FsPsiqp9aCh9yaXRBkMLn1WPh1DJvFKCLIHwrA9C8ocPV5gfLmGIID4nz4O9b4CcVANBTgs210laNfHaHY7ImPr5tBv~d-Qj-3ig5ji9v~~2mbtJBQBZfcKkfxQD25FavfcJPUVvoMpTJX3EMsv6hgA__",
  //   },
  //   {
  //     url: "",
  //   },
  //   {
  //     url: "",
  //   },
  //   {
  //     url: "",
  //   },
  //   {
  //     url: "",
  //   },
  // ];
  return (
    <section className="py-16">
      <div className="container mx-auto text-center w-full ">
        <div className="flex flex-col lg:flex-row items-center justify-start lg:justify-evenly   mb-10">
          {/* Stats Section */}
          <div className="w-80 order-2 lg:order-1 flex flex-wrap justify-start mb-5">
            <div className="flex items-center mx-4">
              <Avatar.Group>
                <Avatar src="https://s3-alpha-sig.figma.com/img/555c/b373/5701db8d4318f0d93edd1f4b64493b37?Expires=1729468800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=gbNRux8srZxwElhth9ojNNhAqLL73X0Tf3-7jteE~gFNDjm9aquaEfH7MEXxcZx4reT-P~~lQrYvhkFk1NzgB6CRBCXYi~5bS9xZxyXlfbWxX8--p8VRuDyBTOMRpzlsWP8KBtwrYYmw1aIJXrGB37PEQOUNNGPU~9URImIUvrQCfG1JM9PBHbSnd93PTGFErAp-6ajHzaruNUsJqbf1xvjBezbdZvRAJVvyncpmwTfL76Qy5auh8SsE2Owzdj7yzFubADQYBT8S2nPpIujx2B6PuZRxywMivGs7KtPwclW4FllDHxGXPYdWW36oaE0abNqmAE7Rw~HMZYsN08hC4Q__" />
                <Avatar src="https://s3-alpha-sig.figma.com/img/6ec9/4186/cc6e3e60f69ecac1443984f93e6078eb?Expires=1729468800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=bb6kr4t0FPKEPTrZevNTRER3AlsHt2sFJBfO2PCRfR6dKI7GbUkibZgj7dIIGkV5J506w5nfAOwDcv1jYl5~Iw-Sj3pk1OdgNjtfOBfCYIpIOrMNQK-X0xQeb0wG5MMRb0aH5eCQGBDGgpdTxYbTrLV-GAEapIWsRMcakx4uFLIh8g9aQW-PoxX~s0ax-0j2kn3DQk3dQn-RfiQSKtbwAyOnpXo6A3wVNR4Ki~TpUUaPzb~hOJm7CHz-tIMw85ibvsRouEL9JzNpZpfKnNVY6BoFRvkDecsUXrbmBPdB2ycQxkaez1h547vTPA3P40Q32CLXOeZbph6g9msgE9iN9Q__" />
                <Avatar src="https://s3-alpha-sig.figma.com/img/5463/2d2d/8b3aae9b589a5e7462a72e6cd10174ef?Expires=1729468800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=F7XFp7WAf0o-3cm32mI1DMYSQ3W5pgt7mZ~s36F3qdpkDv7FJXjrRnQ4Rjus~oM5M7MVg4j5HqW1ZJlp9C2dBF349qBYkTxURrpyZjThuDe5cYIqM~GMIuMEgk1WSuXnOZNaYrfuFFYsYHcMHn5Dn~HXxsa5crUNStWfA4L4g9p0KMTWT6zeZ3Emlrbztb3i15sM5~2YsblDoO9uAcoqNwWEHmzW067mBEqZkaDHfszmHUYu5S1OqUHfIBAR10L~aL6WsMke280BCJQI31D~g786CmS7BGMBfitAB7V8aZ0j3RM1RyE~HjY9EnETbgs-z8FcQafpgz5Wa4azntf7Jw__" />
              </Avatar.Group>
              <span className="dark:text-white">+100 دانشجوی فعال در دوره</span>
            </div>
            <div className="flex relative right-24 lg:right-0 items-center mx-4">
              <Avatar.Group>
                <Avatar src="https://s3-alpha-sig.figma.com/img/c147/98cf/5293c57333d6b58c079ca634d833acf3?Expires=1729468800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=QjP~FD3J~~qRa60ljMW7RBJXO5fwNr5m1SRjWa9VkWZHIqmW7yq4M-ZUhsT0F~dTOqxVErIN2P2FhX4qeBiyrM10qEQ1EJe~bwzEkKZx3bBh1D1mpe5p57Gl4hfFLp278qER5YVKtGzfDVmTGgmCqREagMqMdm1P~lyxAmu93l~aFJGnp7uRMS6oHCrCKfS6nmp4u0YuhSYq3OIYuaytgIG7ixJoOw9D346IHw0G1qGD2io1hVChZD7hjyqsxb7UiW7ADkup98nWXQ-GwSGBKyANp2Mt2VsWWVBVDJQbZeyL192k0McNA52dCpc-MxJ0vuStH2Bql2YFbNaGiCVDvQ__" />
                <Avatar src="https://s3-alpha-sig.figma.com/img/f8b5/1203/5a2e42c8ec0c92cd29eb940180f4d6b5?Expires=1729468800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=SOIypVdmAz8hvG-X1RhzzY1E6FnoVNtQ4bR75qAaADjHuBBFj~ChaPbZ19K2Aqkc2M9JFhg4JmQPkfMoM1mkNrH~KUExiMreCKkj6TsobggQlnc2Q3Z1hTVws52557AlrmbXbvkxab9gjjTZShbPmMLrzW1N1MkjRccnEiWbuLlIMKmfQVD3v2LlE2EKJTXFzqiWlyQNv1O33i0ExxrsPDW7HHnN8WEHAs8PfF20EK-BZdyukWXxuUn7zq7HffTEpfuii-oZf45He6EpPM8FhPEjcMGtToai6xjY2wrhrzlPap2s2heMDW3TO1siaGvel9r2M1QJ4zYzjeFgPtvLKg__" />
                <Avatar src="https://s3-alpha-sig.figma.com/img/b623/70d7/2a2407a4e768af8668fbcd5db0e16279?Expires=1729468800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=YSRfHsIfTWq2s~uLjhOVeupXDIkjSMUQSfo0-Xjnz0a1o3rQJVbxk2tjsAQE9iGPimYqHaZnYZjXf1yKen7XfxpkzUeQyvNHN3b~DD1LtF3ia4sgIWs2XEi1ar-Imvuf8sTafkJ2SeIBnUyfKcCGhryEQbHliPxB7g7qjoDEJ8pObDUvteEit1m-STAuEzZ~akJq8u3LI8bptWjiy3v6SUV2me3wiKkwknYo9J-6QnLv3fNSPFyOU5Ozo41lG4S~Bichsp5if6veOPMvFKwjiXVJtgJMxJPtsaF097WG7IiDg6IDpIzpf20ODu61Vch-KYJTm16w~1MDk-5qD5cV-Q__" />
              </Avatar.Group>
              <span className="dark:text-white">+50 اساتید برتر جهان</span>
            </div>
          </div>
          <div className="w-72 order-1 lg:order-2 justify-center flex flex-wrap my-5">
            <div>
              <div className=" text-4xl font-bold mb-4 dark:text-white">
                آموزش مدرن
              </div>
              <h1 className=" text-4xl font-bold mb-4 dark:text-white">
                پیشرفت سریع
              </h1>
            </div>
            <div>
              <p className=" text-base dark:text-gray-200 ">
                آکادمی آموزش تخصصی برنامه نویسی بحر
              </p>
              <p className=" text-base mb-6 dark:text-gray-200">
                از کودکان تا بزرگسال
              </p>
            </div>
          </div>
          <div className="flex order-3 flex-wrap flex-col">
            <div>
              <h3 className="lg:flex  mr-2 dark:text-white">همین حالا </h3>
              <h3 className="mr-2 dark:text-white">شروع کن به یادگیری!</h3>
            </div>
            <Link to={"/courses"}>
              <button className="mb-8 mt-2 text-white rounded-full bg-gray-900 dark:bg-blue-500 px-5 py-1.5">
                جدیدترین دوره‌ها
              </button>
            </Link>
          </div>
        </div>

        {/* Right side content (Course icons timeline) */}

        <div className="flex justify-center w-full items-center">
          <div className="relative w-full">
            {" "}
            <div className="absolute bottom-1 w-full h-1 bg-gray-300 overflow-hidden">
              <div className="absolute z-10 w-full h-1 right-3/4 bg-blue-500"></div>
            </div>
            <div className="flex justify-around  items-center relative">
              {/* <div className="flex justify-between items-center relative">
                {pics.map((Item, Index) => (
                  <HeroItem key={Index} Item={Item} />
                ))}
              </div> */}
              <div className="flex flex-col items-center">
                <img
                  src="https://s3-alpha-sig.figma.com/img/72eb/0bda/c649ce20dfb0409d36134908c7d16a53?Expires=1729468800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=NTX-nRHg93a6TXcuTScT80hAeNu0VZeV5vMYLG-0~urRRr6LsSKNMlWdAfodQmm6J0dq-TPtvE4niMqkf1pnoxTPlAVpyNu-aF58-0c5TvDG4AuxLXAEGG0TYthmYSa5LkylYkEeL2XQcHJpMYtVE79UeBqc7cb~1bHuB-yWirNlcqqrWu0Nv8MXrUylDCPfgavysRxSoqODwqfBLBjri-TfAcrDqobkE-H30st5~ulh3PJjh~Wld46oa968aC6uj~vflXQPEeIDmEDXf~aT~DDTeqJPu68sD00W7MHbI3nVSz423ftucwaLNZlv4zKBZINmKv0TjeB-ZZgnmPmLZQ__"
                  alt="Figma"
                  className="size-20 "
                />
                <div className="flex items-center justify-center size-3.5 rounded-full bg-gray-300 hover:bg-blue-500">
                  <div className="size-1.5 rounded-full bg-white"></div>
                </div>
              </div>
              <div className="flex flex-col items-center">
                <img
                  src="https://s3-alpha-sig.figma.com/img/e186/5b86/bca1c8cd3132e2639f0ded1c76c11d46?Expires=1729468800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ZpF7verSM~Wu9RNqd6hHA12IbI~LIx0FgOIbjEJ1VWHoFByPXm~I35f~hNBNQaRdeTzriYNSU5G0ZBRk~OdTp5AYbDVLbBVr-uELXIrqJ7qL5uwtJHsPoWAY4ezQFG8rQ-LdULqFnxFTniNE5jVzE7~rpHETIA1o2GIyx8AMsDEN92z1Z26hhXLoHvIIUW3wi6b0DkT179r81dYvmxs6GJy1VS5UIdfUYgiWvPJJJJo25PjCzBHLQk2npBWFV4xWDrtkZvxb~0aqJlk1ZBy-kgkQ0h-7g-7GJh~KAryZtkvoUJMQEWtt2mYD53c6RG478pyeiEK-M6JRMIG8zZUbLA__"
                  alt="React"
                  className="size-20 "
                />
                <div className="flex items-center justify-center size-3.5 rounded-full bg-gray-300 hover:bg-blue-500">
                  <div className="size-1.5 rounded-full bg-white"></div>
                </div>
              </div>
              <div className="flex flex-col items-center">
                <img
                  src="https://s3-alpha-sig.figma.com/img/6405/b314/68db8ea561a27064e67d06d024404030?Expires=1729468800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=WIX7f3Fe52-Shpu4td9BYj9RSTp2IA1E0Ig9oPqYFRFWiJ7g0HTF~RRI69jh1bUhXqb3EDOX0KA~rvdKjK6D4-rfZBJpyGvLwsvRUeJkZiqHOZO7KizDbHpWaSFJYN-lbTC763Mccoy0-C2Bl4y8qlVbAPfdu4m8RJp1RjNQbpT0VsiF0Nusk7g3WoRjyL7FsPsiqp9aCh9yaXRBkMLn1WPh1DJvFKCLIHwrA9C8ocPV5gfLmGIID4nz4O9b4CcVANBTgs210laNfHaHY7ImPr5tBv~d-Qj-3ig5ji9v~~2mbtJBQBZfcKkfxQD25FavfcJPUVvoMpTJX3EMsv6hgA__"
                  alt="JavaScript"
                  className="size-20"
                />
                <div className="flex items-center justify-center size-3.5 rounded-full bg-gray-300 hover:bg-blue-500">
                  <div className="size-1.5 rounded-full bg-white"></div>
                </div>
              </div>
              <div className="flex flex-col items-center">
                <img
                  src="https://s3-alpha-sig.figma.com/img/80bf/fd99/3286c007198bbb9eaad0a58cc4ccc93e?Expires=1729468800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Y6eJdI8l~Ro143lEl94Gsm7ELZF93e8YbueVOJFR4YbuVTeqxrA2VFNwnxcgnVDGn7d9D1YnWDIcKQl6iQrOmoDKDlX1nrxravA9oWwZEE7lQcATqJWjHkueinvx9powQxjyOMvqwNnax0nbuDqv6A0R7pAODBoePYB-RSTerIKc0GL2XK6keiRjWPfLQGNh4wY9pTX0Q0IhLnlkzgSaXNGSIRLV5ViBonNLxaV6gKsLGfFtXnkbiMyqcGagFtO9krPSq7CJC5VqB4FsiSCkUPLjbycC-2GNSewzwtgx4BXk4yLNUFh~kPFfeI0AjKt7GhoWjOkaUs5sllfQ9YA1-Q__"
                  alt="CSS3"
                  className="size-20 "
                />
                <div className="flex items-center justify-center size-3.5 rounded-full bg-gray-300 hover:bg-blue-500">
                  <div className="size-1.5 rounded-full bg-white"></div>
                </div>
              </div>
              <div className="flex flex-col items-center">
                <img
                  src="https://s3-alpha-sig.figma.com/img/fc71/0ef5/0b850c99f94ca19273ee7e343959a869?Expires=1729468800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Tn92qFBUixxyZXwoDdCFdngZoyld1IodHyagJyZT~vPC5NUAb7pXV9jdxTb4haaDJHXngYKsE9f09WEdkVQk~8oZ3TZo5vA5gQ~LwBX668jcOlrNNOwpBJhTH8m74ouMcIlBUdaAfAcgwlg8tLSy6f8drKZHhAWO0AkiG6RNYwnlJI4FT3YbSfRRHZ0OVzd-lknq7BHebGGgZpJxRUTvxRSgSleqBad6MFPncGllv9f39goiGGwU86ee-miq5X4Q4l2alDmm-WBxTyI1yHv4Earhqn8kUnbuahFdv3AYf0WSG8dLkpX~E5ZTdMXxT1UMkpa0z9PxbBtcLiM7noDdKg__"
                  alt="HTML5"
                  className="size-20"
                />
                <div className="flex items-center justify-center size-3.5 z-20   rounded-full bg-blue-500">
                  <div className="size-1.5 rounded-full bg-white"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export { HeroSection };
