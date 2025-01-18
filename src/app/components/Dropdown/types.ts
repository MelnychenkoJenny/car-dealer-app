export interface DropdownPropsType {
  label: string
  options: { value: string; label: string }[]
  value: string
  onChange: (value: string) => void
  placeholder?: string
}
