import './MissingCredit.style.scss'

const MissingCredit = (props: { title: string | undefined }) => {
    return (
        <img
            className="img"
            src="/images/no-user-profile.jpg"
            alt={props.title}
        />
    )
}

export default MissingCredit
