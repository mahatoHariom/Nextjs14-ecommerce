
"use client"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"

export function SingleProductTabComponent() {
  return (
    <Tabs defaultValue="description" className="w-full">
      <TabsList className="grid w-full grid-cols-3">
        <TabsTrigger value="description">Description</TabsTrigger>
        <TabsTrigger value="reviews">Reviews</TabsTrigger>
        <TabsTrigger value="sellerinfo">Seller Info</TabsTrigger>
      </TabsList>
      <TabsContent value="description">
        <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia, consequuntur modi. Ut ratione incidunt ab sint aperiam molestias inventore est rem explicabo eveniet, totam quo blanditiis? Aut debitis expedita voluptates.
        </p>
      </TabsContent>
      <TabsContent value="reviews">
      <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia, consequuntur modi. Ut ratione incidunt ab sint aperiam molestias inventore est rem explicabo eveniet, totam quo blanditiis? Aut debitis expedita voluptates.
        </p>
      </TabsContent>
      <TabsContent value="sellerinfo">
      <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia, consequuntur modi. Ut ratione incidunt ab sint aperiam molestias inventore est rem explicabo eveniet, totam quo blanditiis? Aut debitis expedita voluptates.
        </p>
      </TabsContent>
    </Tabs>
  )
}
