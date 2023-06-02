import ReactCurvedText from "react-curved-text";

const CurvedPokotajTitle = () => {
    return (
        <div>
        <ReactCurvedText width={500}
          height={300}
          cx={250}
          cy={150}
          rx={200}
          ry={100}
          startOffset={50}
          reversed={false}
          text="Pokotaj"
          textProps={{ style: { fontSize: 100 } }}
          textPathProps={null}
          tspanProps={null}
          ellipseProps={null}
          svgProps={null}></ReactCurvedText>
        </div>

    )
}

export default CurvedPokotajTitle;