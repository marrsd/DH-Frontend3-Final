import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";

import Card from '../components/Card'
import React from "react";

describe('Testing Card component', () => {
    vi.mock("react-router-dom", async() => {
        return{
            // ...vi.importMock('react-router-dom'),
            Link: ({ children, to }) => React.createElement('a', { href: to }, children)
        }
    })

    const handleDestacado = vi.fn()

    const props = {
        id: "1",
        name: "Ana",
        userName: "anauser",
        toggleDestacado: handleDestacado
    }

    it('Que se muestre el user de forma correcta', () => {
        render(<Card {...props}/>)
        //screen.debug()
        const name = screen.getByRole('heading', { level: 3 })
        expect(name.textContent).toBe(props.name)
    })

    it("Que se muestre el userName de forma correcta", () => {
        render(<Card {...props}/>)
        const userName = screen.getByText(props.userName)
        expect(userName.textContent).toBeTruthy
    })

    it("Que se muestre el link correctamente", () => {
        render(<Card {...props}/>)
        const link = screen.getByRole("link")
        expect(link).toHaveProperty('href')
    })

    it("Que se muestre el boton correctamente", () => {
        render(<Card {...props}/>)
        const button = screen.getByRole("button")
        expect(button).not.toBeFalsy
    })

    it("que se llame al onClick correctamente", () => {
        render(<Card {...props}/>)
        const button = screen.getByRole("button")
        fireEvent.click(button)
        expect(handleDestacado).toBeCalledTimes(1)
    })

    
}) 