import { FormEvent, KeyboardEvent, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useAppStore } from "../store";
import Error from "../components/Error";
import Spinner from "../components/Spinner";

export default function IndexPage() {
	const navigate = useNavigate();
	const { textarea, loading, error, setTextArea, setLoading, setError } =
		useAppStore();
	const textareaRef = useRef<HTMLTextAreaElement>(null);

	useEffect(() => {
		if (textareaRef.current) {
			textareaRef.current.focus();
		}
	}, []);

	const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		if (textarea.trim() === "git init") {
			setLoading(true);
			setTimeout(() => {
				navigate("/portfolio");
				setError("");
				setLoading(false);
			}, 2000);
		} else {
			setError("Command not found, please type git init");
			return;
		}
	};

	const handleKeyDown = (e: KeyboardEvent<HTMLTextAreaElement>) => {
		if (e.key === "Enter") {
			e.preventDefault();
			handleSubmit(e as unknown as FormEvent<HTMLFormElement>);
		}
	};

	return (
		<>
			<div className="flex items-center h-dvh">
				{loading ? (
					<Spinner />
				) : (
					<form
						className="w-full max-w-xl p-4 mx-auto mt-10 font-mono text-2xl text-white bg-white rounded-lg opacity-90"
						onSubmit={handleSubmit}>
						{error && <Error>{error}</Error>}
						<div className="mb-2">
							<span className="text-red-500">mochoa@portfolio:~$</span>{" "}
						</div>
						<textarea
							className="w-full h-24 p-2 font-mono text-2xl text-white bg-black border-none rounded-lg resize-none focus:outline-none caret-red-500 caret-w-4"
							placeholder="Type 'git init' and hit Enter"
							ref={textareaRef}
							value={textarea}
							onChange={(e) => setTextArea(e.target.value)}
							onKeyDown={handleKeyDown}
						/>
					</form>
				)}
			</div>
		</>
	);
}
