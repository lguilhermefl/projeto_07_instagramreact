import Stories from "./Stories";
import Feed from "./Feed";
import FollowSuggestions from "./FollowSuggestions";

export default function Container() {
    return (
        <div class="container">
            <div class="main">
                <Stories />
                <Feed />
            </div>
            <div class="sidebar-box destop">
                <FollowSuggestions />
            </div>
        </div>
    );
}