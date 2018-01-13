


export default function* rootSaga() {
    yield all([
        helloSaga(),
        watchIncrementAsync()
    ])
}