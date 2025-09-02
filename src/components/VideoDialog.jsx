'use client';

import { Dialog, DialogContent } from '@/components/ui/dialog';

export default function VideoDialog({ open, setOpen }) {
	return (
		<Dialog open={open} onOpenChange={setOpen}>
			<DialogContent className='max-w-4xl p-0 overflow-hidden border-0 bg-transparent shadow-none'>
				<div className='relative w-full aspect-video'>
					<iframe
						className='w-full h-full'
						src={
							open
								? 'https://www.youtube.com/embed/jAXm35Q01c0?si=eW4D_-IcmUqb5vxW&autoplay=1'
								: ''
						}
						title='YouTube video'
						allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
						allowFullScreen
					/>
				</div>
			</DialogContent>
		</Dialog>
	);
}
