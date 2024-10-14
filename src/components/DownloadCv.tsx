import { IconDownload } from "@tabler/icons-react";

export default function DownloadCv() {
	return (
		<>
			<div className="container mx-6 lg:mx-60">
				<div className="mt-4">
					<a
						href="/files/matias-cv.pdf"
						download
						className="inline-flex items-center px-4 py-2 text-white bg-teal-400 rounded-md hover:bg-teal-500">
						<IconDownload className="mr-2" />
						Download my CV
					</a>
				</div>
			</div>
		</>
	);
}
