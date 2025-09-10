import { Button } from "@/components/ui/button";
import { X } from "lucide-react";

interface PageHeaderProps {
  title: string;
  onBackClick?: () => void;
  onSaveClick?: () => void;
  backButtonText?: string;
  saveButtonText?: string;
  showBackButton?: boolean;
  showSaveButton?: boolean;
}

export const PageHeader = ({ 
  title, 
  onBackClick, 
  onSaveClick, 
  backButtonText = "Cancel", 
  saveButtonText = "Save",
  showBackButton = true,
  showSaveButton = true
}: PageHeaderProps) => (
  <div className="flex justify-between items-center mb-8 p-4 bg-secondary text-muted-foreground">
    <h1 className="text-3xl font-semibold">{title}</h1>
    <div className="flex gap-4">
      {showBackButton && onBackClick && (
        <Button
          onClick={onBackClick}
          variant="outline"
          className="flex items-center gap-2 px-6 py-2 border-2 border-gray-300 rounded-md hover:bg-gray-50 transition-colors"
        >
          <X className="w-4 h-4" />
          {backButtonText}
        </Button>
      )}
      {showSaveButton && onSaveClick && (
        <Button
          onClick={onSaveClick}
          variant="custom"
          className="px-6 py-2 text-white rounded-md transition-colors"
        >
          {saveButtonText}
        </Button>
      )}
    </div>
  </div>
);

export default PageHeader;
