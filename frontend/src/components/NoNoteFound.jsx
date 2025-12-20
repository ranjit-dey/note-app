import { Link } from "react-router-dom";
import { BookOpenText, Plus } from "lucide-react";

const EmptyNotes = () => {
  return (
    <div className="flex flex-col items-center justify-center flex-1
                    text-center px-4 gap-6 min-h-[60vh]">

      {/* Icon */}
      <BookOpenText
        size={120}
        className="text-primary-content/30"
      />

      {/* Title */}
      <h1 className="text-2xl sm:text-3xl font-semibold
                     text-primary-content/70 tracking-tight">
        No notes found
      </h1>

      {/* Description */}
      <p className="text-sm sm:text-base text-primary-content/40 max-w-md">
        You haven’t created any notes yet. Start by adding your first note
        and keep your ideas organized.
      </p>

      {/* CTA */}
      <Link
        to="/create"
        className="btn btn-primary rounded-full px-6 gap-2"
      >
        <Plus className="size-5" />
        Create Note
      </Link>
    </div>
  );
};

export default EmptyNotes;
