import { UserContainer, UserInitials, UserInfoContainer, Role }  from "../components"

// This is the user Component Container

export const User = (props: { id: string, name: string, role: string }) => {
    return (
    <UserContainer key={props.id}>
        <UserInitials>{props.name.charAt(0)}</UserInitials>
        <UserInfoContainer>
            <h3>{props.name}</h3>
            <Role>{props.role}</Role>
        </UserInfoContainer>
    </UserContainer>
    )
}