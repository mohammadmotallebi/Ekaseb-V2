import { createAction } from "@reduxjs/toolkit"

const increment = createAction<number | undefined> ("INCREMENT")

const action = increment()
