"use client";
import React, { useEffect, useState } from "react";
import {
    GoogleMap,
    Marker,
    InfoWindow,
    useJsApiLoader,
} from "@react-google-maps/api";

const containerStyle = {
    width: "100%",
    height: "600px",
};

function Map() {
    const { isLoaded } = useJsApiLoader({
        googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
        libraries: ["places", "geometry"],
    });

    const [currentLocation, setCurrentLocation] = useState(null);
    const [selectedUser, setSelectedUser] = useState(null);
    const [distance, setDistance] = useState(null);

    // Get your current location
    useEffect(() => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (pos) => {
                    const { latitude, longitude } = pos.coords;
                    setCurrentLocation({ lat: latitude, lng: longitude });
                    console.log("Your location:", { lat: latitude, lng: longitude });
                },
                (err) => console.error("Geolocation error:", err)
            );
        }
    }, []);

    // Fake users near you
    const users = [
        {
            name: "Alice",
            location: { lat: 23.7521, lng: 90.4320 },
        },
        {
            name: "Bob",
            location: { lat: 23.7503, lng: 90.4305 },
        },
        {
            name: "Charlie",
            location: { lat: 23.7518, lng: 90.4299 },
        },
        {
            name: "Diana",
            location: { lat: 23.7532, lng: 90.4331 },
        },
        {
            name: "Ethan",
            location: { lat: 23.7499, lng: 90.4318 },
        },
    ];

    // Handle click on user marker
    const handleUserClick = (user) => {
        setSelectedUser(user);

        if (currentLocation && window.google?.maps?.geometry) {
            const yourLatLng = new window.google.maps.LatLng(
                currentLocation.lat,
                currentLocation.lng
            );
            const userLatLng = new window.google.maps.LatLng(
                user.location.lat,
                user.location.lng
            );

            const distInMeters =
                window.google.maps.geometry.spherical.computeDistanceBetween(
                    yourLatLng,
                    userLatLng
                );
            const distInKm = (distInMeters / 1000).toFixed(2);
            setDistance(distInKm);
        }
    };

    return isLoaded && currentLocation ? (
        <div className=" mx-[500px]">
            <GoogleMap
                mapContainerStyle={containerStyle}
                center={currentLocation}
                zoom={15}
            >
                {/* You (Blue dot) */}
                <Marker
                    position={currentLocation}
                    label={{
                        text: "You",
                        color: "#ffffff",
                        fontSize: "14px",
                        fontWeight: "bold",
                    }}
                    icon={{
                        url: "http://maps.google.com/mapfiles/ms/icons/blue-dot.png",
                    }}
                />

                {/* Other users */}
                {users.map((user, i) => (
                    <Marker
                        key={i}
                        position={user.location}
                        icon={{
                            url: "https://maps.google.com/mapfiles/ms/icons/red-dot.png", // change color or use a custom icon
                            scaledSize: new window.google.maps.Size(40, 40),
                        }}
                        onClick={() => handleUserClick(user)}
                        title={user.name}
                    />
                ))}

                {selectedUser && (
                    <InfoWindow
                        position={selectedUser.location}
                        onCloseClick={() => {
                            setSelectedUser(null);
                            setDistance(null);
                        }}
                    >
                        <div style={{
                            padding: "10px 14px",
                            borderRadius: "10px",
                            maxWidth: "200px",
                            boxShadow: "0 2px 10px rgba(0,0,0,0.15)",
                            fontFamily: "'Segoe UI', sans-serif",
                        }}>
                            <h4 style={{
                                margin: 0,
                                fontSize: "16px",
                                color: "#202124",
                                fontWeight: 600
                            }}>{selectedUser.name}</h4>
                            <p style={{
                                margin: "5px 0 0",
                                fontSize: "14px",
                                color: "#555",
                            }}>
                                📍 {selectedUser.location.lat.toFixed(5)}, {selectedUser.location.lng.toFixed(5)}
                            </p>
                            {distance && (
                                <p style={{
                                    margin: "5px 0 0",
                                    fontSize: "14px",
                                    color: "#0B8043",
                                    fontWeight: "bold"
                                }}>
                                    📏 {distance} km away
                                </p>
                            )}
                        </div>
                    </InfoWindow>
                )}
            </GoogleMap>
        </div>

    ) : (
        <p>Loading map and your location...</p>
    );

}

export default Map;
