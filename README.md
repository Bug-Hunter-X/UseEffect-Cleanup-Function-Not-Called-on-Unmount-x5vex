# React useEffect Cleanup Function Not Called on Unmount

This repository demonstrates a scenario where the cleanup function in React's `useEffect` hook might not be called on unmount.  This can lead to memory leaks or unexpected behavior if not handled properly.

## Problem

The `useEffect` hook with an empty dependency array `[]` is intended to run only once, on mount. The cleanup function, provided as the second argument to `useEffect`, should execute before the component unmounts. However, there are edge cases where this might not happen.  For example, when the component is unmounted very quickly after mounting.

## Solution

The solution is to ensure the component remains mounted for a sufficient duration to allow the cleanup function to complete. Although not ideal, it is often necessary to manage the timing of unmounting components in React. For example: adding a delay before unmounting a component to allow for the completion of an asynchronous operation.

## Reproduction

The `bug.js` file shows the problematic code. The `bugSolution.js` file demonstrates a potential workaround, ensuring the cleanup function executes by delaying the unmount.
