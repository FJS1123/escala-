export type UserRole = 'admin' | 'leader' | 'volunteer';

export interface UserProfile {
  uid: string;
  name: string;
  email: string;
  phone?: string;
  role: UserRole;
  active: boolean;
  ministries: string[];
  mainMinistry?: string;
  username?: string;
  photoUrl?: string;
  stickers?: string[];
  createdAt: string;
}

export interface Ministry {
  id: string;
  name: string;
  description?: string;
  leaderIds: string[];
  roles: { id: string; name: string }[];
  color: string;
  active: boolean;
}

export interface ScaleAssignment {
  roleId: string;
  roleName: string;
  volunteerId: string;
  volunteerName: string;
  status: 'pending' | 'confirmed' | 'declined';
  declineReason?: string;
  updatedAt?: string;
}

export interface RunSheetItem {
  time: string;
  title: string;
  duration: string;
  songs?: string[];
}

export interface MediaFile {
  name: string;
  url: string;
  targetService: 'Holyrics' | 'ProPresenter' | 'Outro';
}

export interface ScheduleEvent {
  id: string;
  title: string;
  type: 'regular' | 'special' | 'conference';
  date: string; // YYYY-MM-DD
  time: string;
  location: string;
  ministryId: string;
  assignments: ScaleAssignment[];
  status: 'draft' | 'published' | 'cancelled';
  runSheet?: RunSheetItem[];
  notices?: string[];
  mediaFiles?: MediaFile[];
}

export interface ScaleFeedback {
  id: string;
  scheduleId: string;
  ministryId: string;
  authorId: string;
  authorName: string;
  rating: number;
  technicalNotes?: string;
  praiseNotes?: string;
  absentVolunteers?: string[];
  createdAt: string;
}

export interface SwapRequest {
  id: string;
  scheduleId: string;
  requesterId: string;
  requesterName: string;
  roleName: string;
  status: 'open' | 'accepted' | 'approved' | 'rejected';
  acceptedBy?: string;
  createdAt: string;
}
