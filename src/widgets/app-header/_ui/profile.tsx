"use client";
import { useAppSession } from "@/entities/session/use-app-session";
import { SignInButton } from "@/features/auth/sign-in-button";
import { useSignOut } from "@/features/auth/use-sign-out";
import { Avatar, AvatarFallback, AvatarImage } from "@/shared/ui/avatar";
import { Button } from "@/shared/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/shared/ui/dropdown-menu";
import { Skeleton } from "@/shared/ui/skeleton";
import { LogOut, User } from "lucide-react";
import Link from "next/link";

export function Profile() {
const session = useAppSession()
const {signOut, isPending} = useSignOut()

if(session.status === "loading"){
  return <Skeleton className="w-8 h-8 rounded-full"/>
}
if(session.status === "unauthenticated"){
  return <SignInButton />
}
    return (
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            variant="ghost"
            className="p-px rounded-full self-center h-8 w-8"
          >
          <Avatar className="w-8 h-8">
            <AvatarImage src={session.data?.user.image}/>
            <AvatarFallback>AC</AvatarFallback>
			    </Avatar>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-56 mr-2 ">
          <DropdownMenuLabel>
            <p>Мой аккаунт</p>
            <p className="text-xs text-muted-foreground overflow-hidden text-ellipsis">
            {session.data?.user.name}
            </p>
          </DropdownMenuLabel>
          <DropdownMenuGroup></DropdownMenuGroup>
          <DropdownMenuSeparator />
          <DropdownMenuGroup>
            <DropdownMenuItem asChild>
              <Link href={`/profile/1`}>
                <User className="mr-2 h-4 w-4" />
                <span>Профиль</span>
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem onClick={()=>signOut()} disabled={isPending}>
              <LogOut className="mr-2 h-4 w-4" />
              <span>Выход</span>
            </DropdownMenuItem>
          </DropdownMenuGroup>
        </DropdownMenuContent>
      </DropdownMenu>
    );
  
}