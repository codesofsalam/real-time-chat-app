import { useRef, useState } from "react";
import { useChatStore } from "../store/useChatStore";
import { Image, Send, X } from "lucide-react";
import toast from "react-hot-toast";

const MessageInput = () => {
  const [text, setText] = useState("");
  const [imagePreview, setImagePreview] = useState(null);
  const fileInputRef = useRef(null);
  const { sendMessage } = useChatStore();

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (!file.type.startsWith("image/")) {
      toast.error("Please select an image file");
      return;
    }

    const reader = new FileReader();
    reader.onloadend = () => {
      setImagePreview(reader.result);
    };
    reader.readAsDataURL(file);
  };

  const removeImage = () => {
    setImagePreview(null);
    if (fileInputRef.current) fileInputRef.current.value = "";
  };

  const handleSendMessage = async (e) => {
    e.preventDefault();
    if (!text.trim() && !imagePreview) return;

    try {
      await sendMessage({
        text: text.trim(),
        image: imagePreview,
      });

      setText("");
      setImagePreview(null);
      if (fileInputRef.current) fileInputRef.current.value = "";
    } catch (error) {
      console.error("Failed to send message:", error);
    }
  };

  return (
    <div className="p-6 w-full bg-white border-t">
      {imagePreview && (
        <div className="mb-4">
          <div className="relative inline-block">
            <img
              src={imagePreview}
              alt="Preview"
              className="w-24 h-24 object-cover rounded-lg shadow-md"
            />
            <button
              onClick={removeImage}
              className="absolute -top-2 -right-2 size-6 rounded-full bg-gray-800 text-white
              flex items-center justify-center hover:bg-gray-700 transition-colors"
              type="button"
            >
              <X className="size-4" />
            </button>
          </div>
        </div>
      )}

      <form onSubmit={handleSendMessage} className="flex items-center gap-3">
        <div className="flex-1 flex gap-3">
          <input
            type="text"
            className="w-full px-4 py-2.5 rounded-full bg-gray-100 focus:outline-none focus:ring-2 
            focus:ring-blue-500 focus:bg-white transition-all text-gray-800 placeholder:text-gray-500"
            placeholder="Type a message..."
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          <input
            type="file"
            accept="image/*"
            className="hidden"
            ref={fileInputRef}
            onChange={handleImageChange}
          />

          <button
            type="button"
            className={`flex size-10 items-center justify-center rounded-full
              hover:bg-gray-100 transition-colors ${
                imagePreview ? "text-blue-500" : "text-gray-500"
              }`}
            onClick={() => fileInputRef.current?.click()}
          >
            <Image className="size-5" />
          </button>
        </div>
        <button
          type="submit"
          className={`size-10 rounded-full flex items-center justify-center transition-colors
          ${
            !text.trim() && !imagePreview
              ? "bg-gray-100 text-gray-400 cursor-not-allowed"
              : "bg-blue-500 text-white hover:bg-blue-600"
          }`}
          disabled={!text.trim() && !imagePreview}
        >
          <Send className="size-5" />
        </button>
      </form>
    </div>
  );
};

export default MessageInput;
