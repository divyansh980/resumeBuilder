import { Loader2, PlusSquare } from "lucide-react";
import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { v4 as uuidv4 } from "uuid";
import GlobalApi from "./../../../service/GlobalApi";
import { useUser } from "@clerk/clerk-react";

const AddResume = () => {
  const [openDialog, setOpenDialog] = useState(false);
  const [resumeTitle, setResumeTitle] = useState("");
  const [loading, setLoading] = useState(false);

  const { user } = useUser();

  const onCreate = async () => {
    if (!resumeTitle) return;

    setLoading(true);

    const uuid = uuidv4();
    const payload = {
      title: resumeTitle,
      resumeId: uuid,
      userEmail: user?.primaryEmailAddress?.emailAddress,
      userName: user?.fullName,
    };

    try {
      const resp = await GlobalApi.CreateNewResume(payload);
      console.log("Resume Created:", resp.data);
      setOpenDialog(false);
    } catch (error) {
      console.error("Error creating resume:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      {/* Add Resume Card */}
      <div
        className="p-14 py-24 border items-center flex justify-center bg-secondary
        rounded-lg h-[280px] w-[200px]
        hover:scale-105 transition-all hover:shadow-md
        cursor-pointer border-dashed"
        onClick={() => setOpenDialog(true)}
      >
        <PlusSquare />
      </div>

      {/* Dialog */}
      <Dialog open={openDialog} onOpenChange={setOpenDialog}>
        <DialogContent className="w-[500px]">
          <DialogHeader>
            <DialogTitle>Create New Resume</DialogTitle>
            <DialogDescription>
              <p>Add a title for your new resume</p>
              <Input
                className="mt-2 w-[450px] h-[40px] block mx-auto text-black bg-white"
                placeholder="Ex. Full Stack Developer"
                value={resumeTitle}
                onChange={(e) => setResumeTitle(e.target.value)}
              />
            </DialogDescription>

            <div className="flex justify-end gap-5 mt-4">
              <Button
                onClick={() => setOpenDialog(false)}
                variant="ghost"
                disabled={loading}
              >
                Cancel
              </Button>
              <Button
                disabled={!resumeTitle || loading}
                onClick={onCreate}
              >
                {loading ? (
                  <Loader2 className="animate-spin" />
                ) : (
                  "Create"
                )}
              </Button>
            </div>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default AddResume;
