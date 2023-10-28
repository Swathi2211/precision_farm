import "./css/component.css"

import img1 from "./images/bg_img.jpg"
import op1 from "./images/op1.png"
import op2 from "./images/op2.png"
import op3 from "./images/op3.png"
import op4 from "./images/op4.png"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faFile } from '@fortawesome/free-solid-svg-icons'
import Vdo from "./video"

function Component() {
    return (
        <div>
            <div className="spbg">
                <div className="spcont">
                    <div className="sptopic">
                        <h2>Precision Farm Layout Visualization and Subdivision Merging and Removal</h2>
                        <h4>SUMMER PROJECT 2023</h4>
                        <img src={img1}></img>
                    </div>
                    <div className="splinks">
                        <a href="https://github.com/SwasthikaR/SummerProject" target="_blank">
                            <FontAwesomeIcon icon={faGithub} style={{ color: "white", width: '70px', height: '70px' }} />
                        </a>
                        <a href="https://drive.google.com/file/d/19Omxe7cyjATDUpNg4ZCTIgHSsPurVUVs/view?usp=drive_link" target="_blank">
                            <FontAwesomeIcon icon={faFile} size="2xl" style={{ color: "white", width: '70px', height: '70px' }} />
                        </a>
                    </div>
                    <div className="spabs">
                        <h2>Abstract</h2>
                        <p>Our project focuses on designing and developing a software solution to support precision farming practices. The software enables farmers to visualize the layout of their precision farms, accurately calculate field areas, and selectively remove subdivisions for optimized land management. Through an intuitive interface and efficient tools, farmers can easily manage their agricultural plots. By accepting precision farm layout information in common GIS file formats, the software generates graphical representations that highlight field boundaries and subdivisions, providing a clear spatial distribution. The total area calculation feature aids farmers in resource allocation and planning. Additionally, the software allows interactive subdivision removal, updating the visualization and recalculating the total area accordingly. Developed using appropriate geospatial libraries like Shapely and GeoPandas in Python, the solution ensures efficiency, even for large and complex layouts. The project includes comprehensive documentation, validation tests, and visual representations to assist farmers in utilizing the software effectively.</p>
                    </div>
                    <div className="spvideo">
                        <Vdo />
                    </div>
                    <div className="spout">
                        <h2>Algorithms and Outpt</h2>
                        <div className="sp1">
                            <h3 className="spside">Algorithm for Area Calculation and Conversions</h3>
                            <p className="spcon">The area calculation and conversion algorithm play a pivotal role in providing farmers with accurate insights into their agricultural plots. Leveraging the capabilities of GeoPandas, the algorithm meticulously processes shapefile data, computing the total area of individual plots. This data, initially in its native units, is then thoughtfully converted into units preferred by the user, thereby enhancing usability. By employing geometric operations and mathematical precision, this algorithm ensures that farmers receive reliable area information, enabling them to make well-informed decisions regarding resource allocation and utilization.</p>
                        </div>
                        <div className="spoutimg1">
                            <img src={op1}></img>
                            <img src={op2}></img>
                        </div>
                        <div className="sp1">
                            <h3 className="spside">Algorithm for Polygon Removal</h3>
                            <p className="spcon">The polygon removal algorithm empowers users with the capability to engage in data-driven land management practices. Built on the foundation of Shapely's geometry operations, this algorithm provides users with the ability to selectively remove specific subdivisions from their layout. This process can be guided by predefined criteria that align with the users' land management strategies. The algorithm's interactive nature offers farmers the opportunity to optimize their land by eliminating redundant or problematic subdivisions. This not only streamlines land usage but also facilitates targeted improvements and enhancements.</p>
                        </div>
                        <div className="spoutimg2">
                            <img src={op3} style={{ marginLeft: "200px" }}></img>
                        </div>
                        <div className="sp1">
                            <h3 className="spside">Algorithm for Merging Geometrics</h3>
                            <p className="spcon">The geometric merging algorithm introduces an innovative approach to enhance land layout efficiency. By harnessing the power of Shapely's geometric processing, this algorithm identifies adjacent polygons that meet predefined conditions for merging. These conditions could include factors such as proximity, suitability, and contiguity. The algorithm seamlessly combines these polygons, resulting in optimized and consolidated land plots. This process ensures that land resources are utilized effectively, minimizing fragmentation and maximizing operational efficiency.</p>
                        </div>
                        <div className="spoutimg3">
                            <img src={op4} style={{ marginLeft: "200px" }}></img>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Component;