import { ListFilter, LogOut, MessageSquareDiff, Search, User } from "lucide-react";
import { Input } from "../ui/input";
import ThemeSwitch from "./theme-switch";
import { conversations } from "@/dummy-data/db";
import Conversation from "./conversation";
import { UserButton } from "@clerk/nextjs";

const LeftPanel = () => {
	// const conversations = [];

	return (
		<span className='w-1/4 border-gray-600 border-r'>
			<span className='sticky top-0 bg-left-panel z-10'>
				<span className='flex justify-between bg-gray-primary p-3 items-center'>
					<UserButton/>

					<span className='flex items-center gap-3'>
						<MessageSquareDiff size={20} /> 
						<ThemeSwitch />
					</span>
				</span>
				<span className='p-3 flex items-center'>
					{/* Search */}
					<span className='relative h-10 mx-3 flex-1'>
						<Search
							className='absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 z-10'
							size={18}
						/>
						<Input
							type='text'
							placeholder='Search or start a new chat'
							className='pl-10 py-2 text-sm w-full rounded shadow-sm bg-gray-primary focus-visible:ring-transparent'
						/>
					</span>
				</span>
			</span>
			<span className='my-3 flex flex-col gap-0 max-h-[80%] overflow-auto'>
				{/* Conversations will go here*/}
                {conversations.map((conversations)=>(
                    <Conversation key={conversations._id} conversation={conversations} />
                ))}
				{conversations?.length === 0 && (
					<>
						<p className='text-center text-gray-500 text-sm mt-3'>No conversations yet</p>
						<p className='text-center text-gray-500 text-sm mt-3 '>
							We understand {"you're"} an introvert, but {"you've"} got to start somewhere 😊
						</p>
					</>
				)}
			</span>
		</span>
	);
};
export default LeftPanel;