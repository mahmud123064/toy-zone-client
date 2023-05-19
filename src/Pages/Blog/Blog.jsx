
const Blog = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-12">

            <div className="border-4 border-indigo-200 border-x-indigo-500 p-5">
                <h2 className="text-2xl font-bold text-center mb-5">What is an access token and refresh token? How do they work and where should we store them on the client-side?</h2>
                <p><span className="font-bold">Refresh token</span>  just helps you re-validate a user without them having to re-enter their login credentials multiple times.  </p>
                <p><span className="font-bold"> Access token :</span>The access token is re-issued, provided the refresh token is a valid one requesting permission to access confidential resources. </p>
                <p>User Authentication: The user provides their credentials (e.g., username and password) to the authentication server or an identity provider. <br />
                <span className="font-bold">Access Token Issuance:</span>Upon successful authentication, the server generates an access token and includes it in the response to the client application. <br />
                <span className="font-bold">Refresh Token Usage:</span>  When the access token expires, the client application sends the refresh token to the authentication server to request a new access token. <br />
                <span className="font-bold">Access Tokens:</span>  Access tokens should be stored securely to prevent unauthorized access. They are typically stored in memory (RAM) rather than on disk to minimize the risk of exposure. Web applications often store access tokens in browser memory (e.g., JavaScript variables) or as HTTP-only cookies with the "secure" and "sameSite" attributes.

                </p>
            </div>

            <div className="border-4 border-indigo-200 border-x-indigo-500 p-5">
                <h2 className="text-2xl font-bold text-center mb-5">Compare SQL and NoSQL databases?</h2>

                <p><span className="font-bold">SQL</span>  databases are vertically scalable, while NoSQL databases are horizontally scalable. SQL databases are table-based. <br />
                <span className="font-bold">NoSQL</span>  databases are document, key-value, graph, or wide-column stores. SQL databases are better for multi-row transactions, while NoSQL is better for unstructured data like documents or JSON.</p>
            </div>

            <div className="border-4 border-indigo-200 border-x-indigo-500 p-5">
                <h2 className="text-2xl font-bold text-center mb-5">What is express js? What is Nest JS ?</h2>
                <p><span className="font-bold">Express js </span> is a minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications. <br />
                    <span className="font-bold">Nest js</span> is one of the fastest-growing Node. js frameworks for building efficient, scalable, and enterprise-grade backend applications using Node. js. It is known for producing highly testable, maintainable, and scalable applications using modern JavaScript and TypeScript.
                </p>
            </div>

            <div className="border-4 border-indigo-200 border-x-indigo-500 p-5">
                <h2 className="text-2xl font-bold text-center mb-5">What is MongoDB aggregate and how does it work </h2>
                <p><span className="font-bold">Aggregation</span> is a way of processing a large number of documents in a collection by means of passing them through different stages. The stages make up what is known as a pipeline. The stages in a pipeline can filter, sort, group, reshape and modify documents that pass through the pipeline. <br />
                    <span className="font-bold">Match Stage: </span> The $match stage is typically used as the first stage in the pipeline. It filters the documents based on specified criteria, similar to the find method. <br />
                    <span className="font-bold">Project Stage:</span>Project Stage: The $project stage is used to reshape the documents in the pipeline. It can include or exclude specific fields, create new fields, or perform computations to derive new values. <br />
                    <span className="font-bold"> Limit and Skip Stages:</span> The $limit and $skip stages are used to limit the number of documents returned or to skip a certain number of documents.
                </p>
            </div>
        </div>
    );
};

export default Blog;