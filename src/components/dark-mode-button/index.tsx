import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { useDarkModeStore } from "@/stores/darkModeStore";

const htmlFor = "dark-mode-switch";
export default function DarkModeButton() {
	const { darkMode, toggleDarkMode } = useDarkModeStore();
	return (
		<div className="flex items-center gap-2 p-3 border-2 border-solid hover:border-slate-200 hover:bg-slate-50 hover:dark:bg-slate-900 hover:dark:border-slate-500 w-fit h-fit transition rounded-lg">
			<Label htmlFor={htmlFor} className="font-semibold select-none md:select-text">
				Dark Mode
			</Label>
			<Switch
				id={htmlFor}
				checked={darkMode}
				onCheckedChange={(checked) => toggleDarkMode(checked)}
			/>
		</div>
	);
}
