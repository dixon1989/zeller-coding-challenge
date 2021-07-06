import { RadioContainer }  from "../components"

export const Radio = (props: { name: string | number | readonly string[] | undefined; checked: string, handleChange: any }) => {
    return (
    <RadioContainer checked={props.name === props.checked ? true : false}>
    <label>
        <input
          type="radio"
          value={props.name}
          checked={props.name === props.checked}
          onChange={props.handleChange}
          />
            <span>{props.name}</span>
      </label>
      </RadioContainer>
    )
}