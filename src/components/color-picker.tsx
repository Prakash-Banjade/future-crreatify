"use client"

import type React from "react"

import { useEffect, useRef, useState } from "react"

interface ColorPickerProps {
    defaultColor?: string
    onColorChange?: (color: string) => void
    className?: string
}

export function ColorPicker({ defaultColor = "#4169e1", onColorChange, className }: ColorPickerProps) {
    const [isVisible, setIsVisible] = useState(false)
    const [position, setPosition] = useState({ x: 20, y: 20 })
    const [isDragging, setIsDragging] = useState(false)
    const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 })
    const [selectedColor, setSelectedColor] = useState(defaultColor)
    const pickerRef = useRef<HTMLDivElement>(null)

    // Predefined color palette - limited to three colors
    const colorPalette = [
        "#4169e1", // Royal Blue
        "#ff4c00", // Burnt Orange
        "#de00a5", // Vivid Magenta
    ]

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            if (isDragging && pickerRef.current) {
                const newX = e.clientX - dragOffset.x
                const newY = e.clientY - dragOffset.y

                // Ensure the picker stays within viewport bounds
                const maxX = window.innerWidth - pickerRef.current.offsetWidth
                const maxY = window.innerHeight - pickerRef.current.offsetHeight

                setPosition({
                    x: Math.max(0, Math.min(newX, maxX)),
                    y: Math.max(0, Math.min(newY, maxY)),
                })
            }
        }

        const handleMouseUp = () => {
            setIsDragging(false)
        }

        if (isDragging) {
            document.addEventListener("mousemove", handleMouseMove)
            document.addEventListener("mouseup", handleMouseUp)
        }

        return () => {
            document.removeEventListener("mousemove", handleMouseMove)
            document.removeEventListener("mouseup", handleMouseUp)
        }
    }, [isDragging, dragOffset])

    const handleDragStart = (e: React.MouseEvent<HTMLDivElement>) => {
        if (pickerRef.current) {
            const rect = pickerRef.current.getBoundingClientRect()
            setDragOffset({
                x: e.clientX - rect.left,
                y: e.clientY - rect.top,
            })
            setIsDragging(true)
        }
    }

    const handleColorSelect = (color: string) => {
        setSelectedColor(color)
        onColorChange?.(color === "#4169e1" ? "blue" : color === "#ff4c00" ? "orange" : "magenta")

        document.documentElement.classList.remove("orange", "magenta")
        color !== "#4169e1" && document.documentElement.classList.add(color === "#ff4c00" ? "orange" : "magenta")
    }

    const toggleVisibility = () => {
        setIsVisible((prev) => !prev)
    }

    return (
        <div className={`fixed z-50 ${className}`} style={{ left: position.x, top: position.y }} ref={pickerRef}>
            {!isVisible ? (
                <button
                    onClick={toggleVisibility}
                    className="rounded-full w-12 h-12 p-0 shadow-lg flex items-center justify-center focus:outline-none"
                    style={{ backgroundColor: selectedColor }}
                    aria-label="Open color picker"
                >
                    <span className="sr-only">Open color picker</span>
                </button>
            ) : (
                <div className="bg-white rounded-lg shadow-lg w-64 overflow-hidden border border-gray-200">
                    {/* Header */}
                    <div
                        className="p-3 cursor-move flex flex-row items-center justify-between bg-gray-50 border-b border-gray-200"
                        onMouseDown={handleDragStart}
                    >
                        <div className="flex items-center gap-2">
                            {/* Simple drag handle */}
                            <div className="flex space-x-1">
                                <div className="w-1 h-4 bg-gray-300 rounded"></div>
                                <div className="w-1 h-4 bg-gray-300 rounded"></div>
                            </div>
                            <span className="font-medium text-gray-700">Color Picker</span>
                        </div>
                        <button
                            className="h-6 w-6 rounded-full flex items-center justify-center hover:bg-gray-200 focus:outline-none"
                            onClick={toggleVisibility}
                            aria-label="Close color picker"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="16"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="text-gray-500"
                            >
                                <line x1="18" y1="6" x2="6" y2="18"></line>
                                <line x1="6" y1="6" x2="18" y2="18"></line>
                            </svg>
                            <span className="sr-only">Close</span>
                        </button>
                    </div>

                    {/* Content */}
                    <div className="p-3">
                        <div className="grid grid-cols-3 gap-2">
                            {colorPalette.map((color) => (
                                <button
                                    key={color}
                                    className={`w-12 h-12 rounded-md flex items-center justify-center focus:outline-none ${selectedColor === color ? "ring-2 ring-gray-400" : "border border-gray-200"
                                        }`}
                                    style={{ backgroundColor: color }}
                                    onClick={() => handleColorSelect(color)}
                                    aria-label={`Select color ${color}`}
                                >
                                    {selectedColor === color && (
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="16"
                                            height="16"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            className={Number.parseInt(color.slice(1), 16) > 0xffffff / 2 ? "text-black" : "text-white"}
                                        >
                                            <polyline points="20 6 9 17 4 12"></polyline>
                                        </svg>
                                    )}
                                    <span className="sr-only">Select color {color}</span>
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Footer */}
                    <div className="p-3 pt-0 flex justify-between border-t border-gray-200 mt-3">
                        <div className="w-full h-8 rounded-md border border-gray-200" style={{ backgroundColor: selectedColor }} />
                    </div>
                </div>
            )}
        </div>
    )
}
