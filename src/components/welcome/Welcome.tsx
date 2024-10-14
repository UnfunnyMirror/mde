import { open, message } from "@tauri-apps/api/dialog";
import { useState } from "react"

export default function Welcome(): JSX.Element {
    const [folderPath, setFolderPath] = useState("some folder");

    function handleClick() {
        open({ directory: true, multiple: false })
            .then((result) => {
                if (typeof result === "string") {
                    setFolderPath(result)
                } else {
                    // TODO(okonayakodji): Change error message (more details).
                    message("Something wrong")
                }
            })
    }

    return (
        <div className="welcome">
            Welcome page
            <button className="openFilesystemExplorer" onClick={handleClick}>Open folder</button>
            Folder path: {folderPath}
        </div>
    )
};

