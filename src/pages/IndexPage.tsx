import { FormEvent, KeyboardEvent, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useAppStore } from "../stores/useAppStore";
import Error from "../components/Error";
import Spinner from "../components/Spinner";

export default function IndexPage() {
  const navigate = useNavigate();
  const {
    textarea,
    loading,
    error,
    setTextArea,
    setLoading,
    setError,
    setUsername,
  } = useAppStore();
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.focus();
    }
  }, []);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const match = textarea.trim().match(/^init\s+(\w+)$/);
    if (match) {
      const name = match[1];
      setLoading(true);
      setUsername(name);
      setTimeout(() => {
        navigate("/portfolio/home");
        setError("");
        setLoading(false);
      }, 2000);
    } else {
      setError("Command not found, please type init YourName");
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
      <div className="flex items-center p-4 h-dvh sm:p-0">
        {loading ? (
          <Spinner />
        ) : (
          <form
            className="w-full max-w-xl p-4 mx-auto mt-10 font-mono text-2xl text-white bg-white rounded-lg opacity-90"
            onSubmit={handleSubmit}
          >
            {error && <Error>{error}</Error>}
            <div className="mb-2">
              <span className="text-red-500 ">mochoa@portfolio:~$</span>{" "}
            </div>
            <textarea
              className="w-full h-24 p-2 font-mono text-lg text-white bg-black border-none rounded-lg resize-none sm:text-2xl focus:outline-none caret-red-500 caret-w-4"
              placeholder="Type 'init YourName' and hit Enter"
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
