import React, { useState } from "react";
import NavbarComponent from "../components/NavbarComponent";
import Image from "next/image";
import { server } from "../config/index";
import field from "../images/soccer-field.jpg";
import { useQRCode } from "next-qrcode";

const book = ({ a, b, c, d }) => {
  const { Canvas } = useQRCode();
  const [qr, setQr] = useState("");

  const bookASeat = (id, section, seat) => {
    fetch(`${server}/api/seat/${id}`, {
      method: "put",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },

      //make sure to serialize your JSON body
      body: JSON.stringify({
        is_booked: true,
      }),
    }).then((response) => {
      alert(
        `Generated QrCode for =\n ID: ${id} \nSEAT: ${seat} \nSECTION: ${section} \nBOOKED: yes`
      );
      setQr(`ID: ${id} \nSEAT: ${seat} \nSECTION: ${section} \nBOOKED: yes`);
    });
  };
  return (
    <div>
      <NavbarComponent />
      <div className="flex justify-around mt-4">
        <div className="w-1/2">
          {/* Section A  */}
          <div className="text-center" aria-label="secttion-a">
            <p>Section A</p>
            <div className="grid grid-cols-5 gap-3 text-white">
              {a.map((seat) => (
                <button
                  className={`p-1 ${
                    seat.is_booked === 1 ? "bg-red-900" : "bg-blue-900"
                  } cursor-pointer`}
                  key={seat.id}
                  onClick={() => bookASeat(seat.id, seat.section, seat.seat)}
                  disabled={seat.is_booked ? true : false}
                >
                  {seat.seat}
                </button>
              ))}
            </div>
          </div>
          {/* Middle  */}
          <div className="grid grid-cols-3 mt-3">
            <div className="text-center" aria-label="secttion-a">
              <p>Section B</p>
              <div className="grid grid-cols-2 gap-3 text-white">
                {b.map((seat) => (
                  <button
                    className={`p-1 ${
                      seat.is_booked === 1 ? "bg-red-900" : "bg-blue-900"
                    } cursor-pointer`}
                    key={seat.id}
                    onClick={() => bookASeat(seat.id, seat.section, seat.seat)}
                    disabled={seat.is_booked ? true : false}
                  >
                    {seat.seat}
                  </button>
                ))}
              </div>
            </div>
            <div className="cols-span-4 flex justify-center items-center px-4">
              <Image src={field} />
            </div>
            <div className="text-center" aria-label="secttion-a">
              <p>Section C</p>
              <div className="grid grid-cols-2 gap-3 text-white">
                {c.map((seat) => (
                  <button
                    className={`p-1 ${
                      seat.is_booked === 1 ? "bg-red-900" : "bg-blue-900"
                    } cursor-pointer`}
                    key={seat.id}
                    onClick={() => bookASeat(seat.id, seat.section, seat.seat)}
                    disabled={seat.is_booked ? true : false}
                  >
                    {seat.seat}
                  </button>
                ))}
              </div>
            </div>
          </div>
          {/* Section D  */}
          <div className="text-center" aria-label="secttion-a">
            <p>Section D</p>
            <div className="grid grid-cols-5 gap-3 text-white">
              {d.map((seat) => (
                <button
                  className={`p-1 ${
                    seat.is_booked === 1 ? "bg-red-900" : "bg-blue-900"
                  } cursor-pointer`}
                  key={seat.id}
                  onClick={() => bookASeat(seat.id, seat.section, seat.seat)}
                  disabled={seat.is_booked ? true : false}
                >
                  {seat.seat}
                </button>
              ))}
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-center mt-3">
          <p className="text-2xl">QR Code Generated Here</p>
          <div className="flex justify-center items-center">
            {qr === "" ? null : (
              <Canvas
                text={qr}
                options={{
                  type: "image/jpeg",
                  quality: 0.3,
                  level: "M",
                  margin: 3,
                  scale: 4,
                  width: 200,
                }}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default book;

export const getStaticProps = async () => {
  const getA = await fetch(`${server}/api/seat/section/A`);
  const a = await getA.json();
  const getB = await fetch(`${server}/api/seat/section/B`);
  const b = await getB.json();
  const getC = await fetch(`${server}/api/seat/section/C`);
  const c = await getC.json();
  const getD = await fetch(`${server}/api/seat/section/D`);
  const d = await getD.json();

  return {
    props: {
      a,
      b,
      c,
      d,
    },
  };
};
