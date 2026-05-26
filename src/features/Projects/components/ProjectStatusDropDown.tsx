import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

const ProjectStatusDropDown = () => {
  return (
   <Select >
      <SelectTrigger className="w-full max-w-48 ">
        <SelectValue placeholder="Select a status" />
      </SelectTrigger>
      <SelectContent className="bg-gray-800 ">
        <SelectGroup >
          {/* <SelectLabel>Status</SelectLabel> */}
          <SelectItem value="publish">Publish</SelectItem>
          <SelectItem value="draft">Draft</SelectItem>
          <SelectItem value="archive">Archive</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  )
}

export default ProjectStatusDropDown
