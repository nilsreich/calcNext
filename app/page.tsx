'use client'
import { Button } from "@/components/ui/button";
import {
  ArrowDownIcon,
  ArrowLeftIcon,
  ArrowRightIcon,
  ArrowUpIcon,
} from "lucide-react";
import { useEffect, useState } from "react";

export default function Home() {
  const [Input, setInput] = useState<string>("");

  return (
    <main className="flex flex-col h-[100svh] p-2">
      <div className="grow text-right p-2 border">
        <div>history</div>
        <div className="text-3xl">{Input}</div>
        <div>result</div>
      </div>
      <div>
        <div className="grid grid-cols-6 gap-2 mt-2">
          <Button size={"sm"} variant={"outline"} >
            shift
          </Button>
          <Button size={"sm"} variant={"outline"}>
            alpha
          </Button>
          <div className="col-span-2 row-span-3 self-center grid grid-cols-3 grid-rows-3">
            <Button size={"sm"} variant={"secondary"} className="col-start-2">
              <ArrowUpIcon />
            </Button>
            <Button size={"sm"} variant={"secondary"} className="row-start-2">
              <ArrowLeftIcon />
            </Button>
            <Button
              size={"sm"}
              variant={"secondary"}
              className=" row-start-2 col-start-3"
            >
              <ArrowRightIcon />
            </Button>
            <Button
              size={"sm"}
              variant={"secondary"}
              className="row-start-3 col-start-2"
            >
              <ArrowDownIcon />
            </Button>
          </div>
          <Button size={"sm"} variant={"outline"} >MENU
          </Button>
          <Button size={"sm"} variant={"outline"} >
            on
          </Button>
          <Button size={"sm"} variant={"outline"}>
            Optn
          </Button>
          <Button size={"sm"} variant={"outline"}>
            CALC
          </Button>

          <Button size={"sm"} variant={"outline"}>
            int
          </Button>
          <Button size={"sm"} variant={"outline"}>
            x
          </Button>

          <Button size={"sm"} variant={"outline"}>
            frac
          </Button>
          <Button size={"sm"} variant={"outline"}>
            sqrt
          </Button>
          <Button size={"sm"} variant={"outline"}>
            x^-2
          </Button>
          <Button size={"sm"} variant={"outline"}>
            x^
          </Button>
          <Button size={"sm"} variant={"outline"}>
            log
          </Button>
          <Button size={"sm"} variant={"outline"}>
            ln
          </Button>
          <Button size={"sm"} variant={"outline"}>
            (-)
          </Button>
          <Button size={"sm"} variant={"outline"}>
            .,.
          </Button>
          <Button size={"sm"} variant={"outline"}>
            x^-1
          </Button>
          <Button size={"sm"} variant={"outline"}>
            sin
          </Button>
          <Button size={"sm"} variant={"outline"}>
            cos
          </Button>
          <Button size={"sm"} variant={"outline"}>
            tan
          </Button>
          <Button size={"sm"} variant={"outline"}>
            STO
          </Button>
          <Button size={"sm"} variant={"outline"}>
            ENG
          </Button>
          <Button size={"sm"} variant={"outline"}>
            (
          </Button>
          <Button size={"sm"} variant={"outline"}>
            )
          </Button>

        </div>

        <div className="grid grid-cols-5 mt-2 gap-2">
          <Button onClick={()=>setInput(Input+'7')}>7</Button>
          <Button onClick={()=>setInput(Input+'8')}>8</Button>
          <Button onClick={()=>setInput(Input+'9')}>9</Button>
          <Button className="bg-blue-600 text-foreground">DEL</Button>
          <Button className="bg-blue-600 text-foreground">AC</Button>
          <Button>4</Button>
          <Button>5</Button>
          <Button>6</Button>
          <Button>x</Button>
          <Button>/</Button>
          <Button>1</Button>
          <Button>2</Button>
          <Button>3</Button>
          <Button>+</Button>
          <Button>-</Button>
          <Button>0</Button>
          <Button>,</Button>
          <Button>x10x</Button>
          <Button>Ans</Button>
          <Button>=</Button>
        </div>
      </div>
    </main>
  );
}
