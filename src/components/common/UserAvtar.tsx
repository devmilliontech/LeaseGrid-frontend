import { UserIcon } from "lucide-react";
import React from "react";

export const UserAvatar = ({ img, className }: { img?: string; className?: string }) => {
  const [hasError, setHasError] = React.useState(false);

  const handleImageError = () => {
    setHasError(true); // If there's an error loading the image, show the icon
  };

  return (
    <div className={`rounded-full flex items-center justify-center ${className}`}>
      {!hasError && img ? (
        <img
          src={img}
          alt="User Avatar"
          className="rounded-full w-full h-full object-cover"
          onError={handleImageError} // Trigger error handler if the image fails to load
        />
      ) : (
        <UserIcon className="w-full h-full p-2 rounded-full bg-gray-200" />
      )}
    </div>
  );
};